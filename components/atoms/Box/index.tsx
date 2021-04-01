import * as React from 'react';
import {ContainerBox} from "./styles";

interface Props {
    className?:string
}
export const Box: React.FC<Props> = ({children, className}) => {
    return (
        <ContainerBox className={className}>
            {children}
        </ContainerBox>
    )
}