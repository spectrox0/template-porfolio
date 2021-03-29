import * as React from 'react';
import {ContainerBox} from "./styles";


export const Box: React.FC = ({children}) => {
    return (
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}