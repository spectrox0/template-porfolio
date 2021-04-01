import * as React from 'react';
import {ContainerCardWork} from './styles'
import {onMouseOver, onMouseLeave} from '../../../../helpers/cursor'
interface Props {
    imgSrc: string,
    name: string,
    id?: number | string
    onClick?: () => void
}

export const CardWork: React.FC<Props> = ({imgSrc, name, id, onClick}) => {
    return (
        <ContainerCardWork onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
            <img src={imgSrc} alt={name}/>
            <div className={'info'}>
                <h4> {name}</h4>
            </div>
        </ContainerCardWork>
    )
}