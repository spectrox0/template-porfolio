import * as React from 'react';
import {ContainerButton} from './styles';


interface Props {
    color?: string
}

export const Button: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement> & React.HTMLProps<HTMLButtonElement>> = ({
                                                                                                                               color,
                                                                                                                               className
                                                                                                                               ,
                                                                                                                               children
                                                                                                                               ,
                                                                                                                               ...rest
                                                                                                                           }) => {
    return (
        <ContainerButton className={className} color={color}>
            <button className={`hover`} {...rest}>
                {children}
            </button>
        </ContainerButton>
    )
}