import * as React from 'react';
import {ContainerInput} from "./styles";

interface Props {
    value: string | number,
    label: string,
    id: string,
}

export const Input: React.FC<Props & React.HtmlHTMLAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>> = ({label, id,...rest}) => {
    return (
        <ContainerInput>
            <label htmlFor={id}> {label}</label>
            <input id={id} {...rest} />
        </ContainerInput>
    )
}