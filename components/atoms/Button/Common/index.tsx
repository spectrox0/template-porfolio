import * as React from 'react';
import {ContainerButton} from './styles';

export const Button = ({children, type}) => {
    return (
        <ContainerButton>
            <button className={'hover'}>
                {children}
            </button>
        </ContainerButton>
    )
}