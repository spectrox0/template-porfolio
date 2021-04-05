export const animationModalWorkVariant = {
    initial: {
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        opacity: 0,
        originX: 0.5,
        originY: 0.5,
        scale: 0.2,
    },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        scale: 0.2,
        originX: 0.5,
        originY: 0.5,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
}

export const propsModalWorkAnimation = {
    variants: animationModalWorkVariant,
    animate: "enter",
    initial: "initial",
    exit: "exit"
}