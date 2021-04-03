import * as React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {ContainerAlert} from "./styles";
import {propsAlertAnimation, propsAlertBackdropAnimation} from "../../../../utils/animations/alert";
import {useDispatch, useSelector} from "react-redux";
import {setAlert} from "../../../../redux/actions/global";
import {Text} from "../../../atoms/Text";
import {Button} from "../../../atoms/Button/Common";
import {paletteColorsDark} from "../../../../styles/variables";

interface Props {

}

export const Alert: React.FC<Props> = () => {
    const dispatch = useDispatch()
    // @ts-ignore
    const {alert} = useSelector(state => ({...state}))
    const cleanMessage = () => {
        dispatch(setAlert())
    }
    return (
        <AnimatePresence>{
            alert && (
                <ContainerAlert type={alert.type}>
                    <motion.div className={'backdrop'} onClick={cleanMessage} {...propsAlertBackdropAnimation}/>
                    <motion.div className={'container-alert'} {...propsAlertAnimation}>
                        <Text fontSize={'1.5em'} fontWeight={'500'}
                              color={alert.type === "success" ? paletteColorsDark.secondary : paletteColorsDark.error}>
                            {alert.message}
                        </Text>
                        <Button className={'w-100'} onClick={cleanMessage}>
                            Ok
                        </Button>
                    </motion.div>
                </ContainerAlert>
            )}
        </AnimatePresence>
    )
}