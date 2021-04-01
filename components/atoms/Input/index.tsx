import * as React from 'react';
import {ContainerInput} from "./styles";
import {Field, FieldAttributes, FieldInputProps, FieldProps} from "formik";

interface Props {
    label: string,
    className?: string
    id: string,
}

export const Input: React.FC<FieldAttributes<Props>> = ({as ,className, label, id,...rest}) => {
    return (
        <ContainerInput className={className} textarea={as==='textarea'}>
            <Field id={id} as={as} {...rest} />
            <div className={'effect-underline'} />
        </ContainerInput>
    )
}