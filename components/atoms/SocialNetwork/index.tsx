import * as React from 'react';
import {ContainerSocialNetwork} from "./styles";
import {onMouseLeave, onMouseOver} from '../../../helpers/cursor'

export interface Props {
    icon: React.FC<any>,
    url: string,
    name: string
}

export const SocialNetwork: React.FC<Props> = ({icon: Icon, url, name}) => {

    return (
        <ContainerSocialNetwork href={url} target={"_blank"} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <Icon color={'#fff'}/>
        </ContainerSocialNetwork>
    )
}