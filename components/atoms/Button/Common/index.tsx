import * as React from 'react';
import {ContainerButton} from './styles';
import {onMouseLeave, onMouseOver} from '../../../../helpers/cursor'

interface Props {
    color?: string
}

export const Button: React.FC<Props
    & React.HtmlHTMLAttributes<HTMLButtonElement>
    & React.HTMLProps<HTMLButtonElement>> = ({
                                                 color,
                                                 className,
                                                 children,
                                                 ...rest
                                             }) => {

    return (
        <ContainerButton className={className} color={color}>
            {/*@ts-ignore*/}
            <button onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} {...rest}>
                {children}
            </button>
        </ContainerButton>
    )
}