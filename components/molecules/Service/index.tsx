import * as React from 'react'
import {ContainerService} from "./styles";
import {Title} from "../../atoms/Title";


interface Props {
    icon: JSX.Element,
    title?: string,
    className?: string
    color?: string,
}

export const Service: React.FC<Props> = ({className, title, icon, color}) => {
    return (
        <ContainerService className={className} color={color}>
            <div className={'icon mb-2'}>
                {icon}
            </div>
            <Title fontSize={'1.3em'} fontWeight={'500'} tagTitle={'h3'}>
                {title}
            </Title>
        </ContainerService>
    )
}