import Particles from "react-tsparticles";

function BubbleParticles({
    particleColor,
    hoverParticleColor,
    onClick,
    onHover,
    shape,
}) {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {};

    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: {},
                    },
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                },
                fullScreen: {
                    zIndex: 1,
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: onClick.enable,
                            mode: onClick.mode,
                        },
                        onHover: {
                            enable: onHover.enable,
                            mode: onHover.mode,
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.1,
                            color: {
                                value: hoverParticleColor,
                            },
                            size: 40,
                        },
                        grab: {
                            distance: 400,
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColor,
                    },
                    links: {
                        color: {
                            value: "#ffffff",
                        },
                        distance: 200,
                        width: 2,
                    },
                    move: {
                        attract: {
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
                        },
                        enable: true,
                        path: {},
                        outModes: {
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out",
                        },
                        speed: 8,
                        spin: {},
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 6,
                    },
                    opacity: {
                        random: {
                            enable: true,
                            minimumValue: 0.3,
                        },
                        value: {
                            min: 0.3,
                            max: 0.5,
                        },
                        animation: {
                            speed: 1,
                            minimumValue: 0.1,
                        },
                    },
                    shape: {
                        options: {
                            star: {
                                sides: 6,
                            },
                            polygon: {
                                sides: 8,
                            },
                            square: {
                                sides: 4,
                            },
                            triangle: {
                                sides: 3,
                            },
                            circle: {
                                sides: 0,
                            },
                        },
                        type: shape,
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 100,
                        },
                        value: {
                            min: 100,
                            max: 160,
                        },
                        animation: {
                            minimumValue: 40,
                        },
                    },
                },
            }}
        />
    );
}

export default BubbleParticles;
