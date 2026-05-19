import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}

            className="absolute inset-0 -z-10"

            options={{
                fullScreen: {
                    enable: false,
                },

                background: {
                    color: {
                        value: "#000000",
                    },
                },

                particles: {
                    number: {
                        value: 60,
                    },

                    color: {
                        value: ["#3b82f6", "#a855f7", "#ec4899"],
                    },

                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.2,
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },

                    opacity: {
                        value: 0.5,
                    },

                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
            }}
        />
    );
}