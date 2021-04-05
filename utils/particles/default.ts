import {paletteColorsDark} from "../../styles/variables";
import {IParticlesParams} from 'react-particles-js'

export const paramsTsParticles: IParticlesParams = {
    fpsLimit: 60,
    detectRetina: true,
    "particles": {

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
                enable: false,
                value_area: 200
            },
            "value": 40
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
        },
        collisions: {
            enable: false
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

