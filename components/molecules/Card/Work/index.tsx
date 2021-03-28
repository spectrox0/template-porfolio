import * as React from 'react';
import {ContainerCardWork} from './styles'

interface Props {
    imgSrc: string,
    name: string,
    id?: number | string
    onClick?: () => void
}

export const CardWork: React.FC<Props> = ({imgSrc, name, id, onClick}) => {
    return (
        <ContainerCardWork className={'hover'} onClick={onClick}>
            <img src={imgSrc} alt={name}/>
            <div className={'info'}>
                <h4> {name}</h4>
            </div>
        </ContainerCardWork>
    )
}