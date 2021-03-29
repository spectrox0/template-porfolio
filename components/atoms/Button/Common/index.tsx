import * as React from 'react';
import {ContainerButton} from './styles';


export const Button: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({className, children, ...rest}) => {
    return (
        <ContainerButton>
            <button className={`hover ${className}`} {...rest}>
                {children}
            </button>
        </ContainerButton>
    )
}