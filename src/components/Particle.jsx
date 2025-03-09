import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";



function Particle() {
    const containerRef = useRef(null), [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    const particlesLoaded = useCallback(
        (container) => {
            containerRef.current = container;
            window.particlesContainer = container;
        },
        [containerRef]
    );

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: "-100px",
            },
            detectRetina: true,
            fpsLimit: 120,
            background: {
                color: "#0C051C",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "20%",
                opacity: 1,
            },
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080,
                    },
                },
                color: {
                    value: "#ffffff",
                },
                links: {
                    enable: false,
                },
                move: {
                    enable: true,
                    speed: { min: 0.1, max: 1 },
                    direction: "none",
                    random: false,
                    straight: false,
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                    },
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        opacity: 0,
                        size: 0,
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                    },
                },
            },
        }),
        []
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}
        </div>
    );
}

export default Particle;
