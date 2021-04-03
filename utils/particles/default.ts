import {paletteColorsDark} from "../../styles/variables";
import {IParticlesParams} from 'react-particles-js'

export const paramsTsParticles: IParticlesParams = {
    fpsLimit: 60,
    detectRetina: true,
    "particles": {
        shadow: {
            enable: true,
            color: paletteColorsDark.primary,
            blur: 10,
            offset: {x: 4, y: 4}
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
            warp: true,
        },
        "number": {
            density: {
                enable: true,
                value_area: 700
            },
            "value": 25
        },
        "size": {
            random: true,
            animation: {
                enable: true,
                speed: 3,
                minimumValue: 2,
                sync: false
            },
            "value": 3,
        },
        "color": {
            value: paletteColorsDark.primary,
        },
        "shape": {
            type: "circle"
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
            "shadow": {
                "blur": 5,
                "color": {
                    "value": "#000000"
                },
                "enable": true
            },
        },
        collisions: {
            enable: true
        },
    },
    "interactivity": {
        'detect_on': 'window',
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            repulse: {
                distance: 100,
                duration: 0.2
            },
            "slow": {
                "factor": 3,
                "radius": 200
            },
        }
    },

}

