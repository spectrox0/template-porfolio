import * as React from 'react';
import {ContainerSpinner} from './styles'

export const Spinner: React.FC = () => {
    return (
        <ContainerSpinner>
            <div className="spinner"/>
        </ContainerSpinner>
    )
}