import * as React from 'react';
import {Icon} from '../../atoms/Icon'
import {ContainerItemContact} from "./styles";
import {Title} from "../../atoms/Title";
import {Text} from "../../atoms/Text";
import {onMouseLeave, onMouseOver} from '../../../helpers/cursor'

interface Props {
    icon: string,
    name: string,
    value: string
    href?: string,
    className: string
}

export const ItemContact: React.FC<Props> = ({icon, value, name, href, className}) => {
    return (
        <ContainerItemContact onMouseOver={onMouseOver}
                              onMouseLeave={onMouseLeave}
                              className={className}
                              target="_blank"
                              href={href}
        >
            <div className={'icon'}>
                <Icon name={icon}/>
            </div>
            <Title tagTitle={'h3'} fontSize={'1.3em'}>
                {name}
            </Title>
            <Text fontSize={'1em'}>
                {value}
            </Text>

        </ContainerItemContact>
    )
}