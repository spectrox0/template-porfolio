import * as React from 'react';
import {ContainerScreenLoading} from "./styles";
import {Spinner} from '../../atoms/Spinner/Common'
import {AnimatePresence} from "framer-motion";
import {propsPage} from '../../../utils/animations/LoadingScreen'
interface Props {
    loading?: boolean
}

export const ScreenLoading: React.FC<Props> = ({loading}) => {

    return (
        <AnimatePresence>
            {loading ? (
                <ContainerScreenLoading {...propsPage}>
                    <Spinner/>
                </ContainerScreenLoading>
            ) : null}
        </AnimatePresence>)

}