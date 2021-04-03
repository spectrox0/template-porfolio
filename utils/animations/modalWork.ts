import {animationAlertBackdropVariant} from "./alert";

interface Props {
    coordinate: {
        x: number
        y: number
    }
    size: {
        width: number
        height: number
    }
}
export const animationModalWorkVariant = (props : Props) =>({
    initial: {
        opacity: 0,
        y: props.coordinate.y,
        x: props.coordinate.x,
        width: props.size.width,
        height: props.size.height
    },
    enter: {
        opacity: 1,
        width: '100%',
        height: '100%',
        transition: {
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.48, 0.15, 0.25, 0.96],
        }
    },
})

export const propsModalWorkAnimation = (props: Props) => ({
    variants: animationModalWorkVariant(props),
    animate:"enter",
    initial:"initial",
    exit:"exit"
})