import TunnelDARK from "./TunnelDARK";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = ({ scrollContainer }) => {
    return (
        <section>
            <TunnelDARK scrollContainer={scrollContainer} />

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-[65%] md:top-[73%] left-0 right-0 md:left-[20%] z-10 pointer-events-none px-4"
            >
                <div className="flex-1 lg:mb-0">
                    <h1
                        style={{
                            position: "relative",
                            verticalAlign: "bottom",
                            bottom: "1%",
                            left: "1",
                            zIndex: "2",
                            textAlign: "right",
                        }}
                        className="font-medium text-white text-[32px] xs:text-[45px] sm:text-[60px] md:text-[72px] lg:text-[90px] xl:text-[110px] 2xl:text-[120px] leading-[1.1] tracking-tighter streaky-glow"
                    >
                        NATTHAKITT PRAPUNWATTANA
                    </h1>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

