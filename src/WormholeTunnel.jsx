import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";

const WormholeTunnel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Initial Setup
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. Wormhole Geometry
    const radius = 3;
    const tubeLength = 200;
    const speed = 0.22;
    const noise = new ImprovedNoise();

    // Create geometry
    const tubeGeo = new THREE.CylinderGeometry(radius, radius, tubeLength, 128, 512, true);
    const tubeVerts = tubeGeo.attributes.position;
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < tubeVerts.count; i++) {
      const p = new THREE.Vector3().fromBufferAttribute(tubeVerts, i);

      // Displacement logic from wormhole.js
      const n = noise.noise(p.x * 0.1, p.y * 0.1, p.z * 0.1);
      const radialDir = new THREE.Vector3(p.x, 0, p.z).normalize();
      p.addScaledVector(radialDir, n * 0.5);

      tubeVerts.setXYZ(i, p.x, p.y, p.z);

      // Color
      color.setHSL(0.55 - n * 0.2, 1, 0.5);
      colors.push(color.r, color.g, color.b);
    }
    tubeGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    tubeGeo.attributes.position.needsUpdate = true;

    const tubeMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    // Create 2 tubes for looping
    const createTube = (index) => {
      const pMesh = new THREE.Points(tubeGeo, tubeMat);
      pMesh.rotation.x = Math.PI * 0.5;
      pMesh.position.z = -tubeLength * index;
      return pMesh;
    };

    const tubeA = createTube(0);
    const tubeB = createTube(1);
    scene.add(tubeA, tubeB);

    // 3. Floating Shapes
    const shapes = [];
    const shapeGeos = [
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.TetrahedronGeometry(0.07)
    ];

    for (let i = 0; i < 80; i++) {
      const geo = shapeGeos[Math.floor(Math.random() * shapeGeos.length)];
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geo, mat);

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (radius - 0.5);
      const zPos = Math.random() * tubeLength * 2 - tubeLength;

      mesh.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist, zPos);
      mesh.material.color.setHSL(Math.random(), 0.8, 0.6);

      scene.add(mesh);
      shapes.push({ mesh, velocity: new THREE.Vector3() });
    }

    // 4. Interaction
    const mouse = new THREE.Vector2(0, 0);
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 5. Animation Loop
    let frameId;
    const animate = (t) => {
      frameId = requestAnimationFrame(animate);

      // Move tubes
      tubeA.position.z += speed;
      tubeB.position.z += speed;
      if (tubeA.position.z > 100) tubeA.position.z = -300;
      if (tubeB.position.z > 100) tubeB.position.z = -300;

      // Rotate tubes
      tubeA.rotation.y += 0.002;
      tubeB.rotation.y += 0.002;

      // Camera wobble
      camera.position.x = Math.cos(t * 0.001) * 1;
      camera.position.y = Math.sin(t * 0.001) * 1;
      camera.lookAt(0, 0, 0);

      // Shapes
      shapes.forEach(s => {
        s.mesh.position.z += speed;
        if (s.mesh.position.z > 20) s.mesh.position.z -= tubeLength * 2;

        s.mesh.rotation.x += 0.01;
        s.mesh.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate(0);

    // 6. Cleanup
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      tubeGeo.dispose();
      tubeMat.dispose();
      shapeGeos.forEach(g => g.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "black",
        pointerEvents: "none" // Allow clicks to pass through if needed, though we handle mousemove
      }}
    />
  );
};

export default WormholeTunnel;
