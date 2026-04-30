import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import spline from "./spline.js";

const TunnelDARK = ({ scrollContainer }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = document.documentElement.clientWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.5);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // Pre-sample spline for boundary checks
    const splinePoints = spline.getPoints(500);

    const mouse = new THREE.Vector2(-10, -10); // Start off-screen
    const raycaster = new THREE.Raycaster();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.enableZoom = false; // Allow page scroll instead of camera zoom

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      1.5,
      0.4,
      100
    );
    bloomPass.threshold = 0.002;
    bloomPass.strength = 2.5;
    bloomPass.radius = 0;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
    const edges = new THREE.EdgesGeometry(tubeGeo, 0.01);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const tubeLines = new THREE.LineSegments(edges, lineMat);
    scene.add(tubeLines);

    const shapes = [];
    const numShapes = 100;
    const size = 0.09;
    const geometries = [
      new THREE.BoxGeometry(size, size, size),
      new THREE.SphereGeometry(size / 2, 10, 10),
      new THREE.ConeGeometry(size / 2, size, 16),
      new THREE.TetrahedronGeometry(size / 2),
    ];

    for (let i = 0; i < numShapes; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      const shape = new THREE.Mesh(geometry, material);

      const p = (i / numShapes + Math.random() * 0.1) % 1;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      pos.x += Math.random() - 0.4;
      pos.z += Math.random() - 0.4;
      shape.position.copy(pos);

      const rote = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.rotation.set(rote.x, rote.y, rote.z);

      const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.6); //0.7 - p
      shape.material.color = color;

      scene.add(shape);
      shapes.push({
        mesh: shape,
        velocity: new THREE.Vector3(0, 0, 0),
      });
    }

    // Handle mouse movement for interaction
    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    renderer.domElement.addEventListener("mousemove", handleMouseMove);

    // Localized click interaction for a bigger shove
    const handleMouseDown = () => {
      // Find 3D point in front of camera based on mouse
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.4);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const point = camera.position.clone().add(dir.multiplyScalar(0.4)); // Distance from camera

      shapes.forEach((s) => {
        const distToPush = s.mesh.position.distanceTo(point);
        if (distToPush < 0.6) { // Bigger radius for click
          const dir = s.mesh.position.clone().sub(point).normalize();
          s.velocity.add(dir.multiplyScalar(0.1)); // Strong shove
        }
      });
    };
    renderer.domElement.addEventListener("mousedown", handleMouseDown);

    let wormholeColorOffset = 0;

    const updateCamera = (t) => {
      const time = t * 0.1;
      const looptime = 10 * 1000;
      const p = (time % looptime) / looptime;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
      camera.position.copy(pos);
      camera.lookAt(lookAt);
    };

    const animate = (t = 0) => {
      requestAnimationFrame(animate);

      // Create a 3D point from mouse coordinates for the "bubble"
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const pushPoint = camera.position.clone().add(dir.multiplyScalar(0.7));

      // Update shapes with physics
      shapes.forEach((s) => {
        // 0. Continuous repulsion from mouse cursor (with smooth falloff)
        const repulsionRadius = 0.5;
        const distToCursor = s.mesh.position.distanceTo(pushPoint);
        if (distToCursor < repulsionRadius) {
          // Smooth falloff: force is stronger when closer to the center
          const forceFactor = (1.0 - distToCursor / repulsionRadius);
          const repulsion = s.mesh.position.clone().sub(pushPoint).normalize();
          s.velocity.add(repulsion.multiplyScalar(forceFactor * 0.015));
        }

        // 1. Boundary constraint: Keep in tunnel
        // Find closest point on spline (brute force search on pre-sampled points)
        let closestPt = splinePoints[0];
        let minDistSq = s.mesh.position.distanceToSquared(closestPt);
        for (let i = 1; i < splinePoints.length; i++) {
          const dSq = s.mesh.position.distanceToSquared(splinePoints[i]);
          if (dSq < minDistSq) {
            minDistSq = dSq;
            closestPt = splinePoints[i];
          }
        }

        const tubeRadius = 0.6; // Keep within 0.6 units of the center
        const distFromSpline = Math.sqrt(minDistSq);
        if (distFromSpline > tubeRadius) {
          // Hard corrective force back towards the spline
          const dirBack = closestPt.clone().sub(s.mesh.position).normalize();
          const correctiveStrength = (distFromSpline - tubeRadius) * 0.1;
          s.velocity.add(dirBack.multiplyScalar(correctiveStrength));
        }

        // 2. Application of physics
        s.velocity.multiplyScalar(0.92); // Momentum damping
        s.mesh.position.add(s.velocity);

        // 3. Subtle rotation
        s.mesh.rotation.x += 0.009;
        s.mesh.rotation.y += 0.009;
      });

      // Gradually transition wormhole color
      wormholeColorOffset += 0.001;
      const wormholeColor = new THREE.Color().setHSL(
        wormholeColorOffset % 1,
        1,
        0.5
      );
      tubeLines.material.color = wormholeColor;

      updateCamera(t);
      composer.render(scene, camera);
      controls.update();
    };
    animate();

    const handleWindowResize = () => {
      camera.aspect = document.documentElement.clientWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(document.documentElement.clientWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleWindowResize);


    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
    };

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [scrollContainer]);


  return (

    <div style={{ position: "relative", height: "100%", width: "100%", zIndex: "1", pointerEvents: "auto" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%", pointerEvents: "auto" }} />
    </div>
    //<Canvas><div style={{ position: "relative", height: "100%", width: "100%" }}><div ref={mountRef} style={{ width: "100%", height: "100%" }} /></div></Canvas>
  );
};

export default TunnelDARK;
