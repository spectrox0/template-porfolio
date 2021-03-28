import * as React from 'react';
import {ContainerSocialNetwork} from "./styles";

export interface Props {
    icon: React.FC<any>,
    url: string,
    name: string
}

export const SocialNetwork: React.FC<Props> = ({icon: Icon, url, name}) => {

    return (
        <ContainerSocialNetwork href={url} target={"_blank"}>
            <Icon color={'#fff'}/>
        </ContainerSocialNetwork>
    )
}