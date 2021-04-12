import * as React from 'react';
import {ContainerBarContact} from "./styles";
import {SocialNetwork} from "../../atoms/SocialNetwork"
import {socialNetwork} from "../../../config";
import {Icon} from "../../atoms/Icon";

export const BarContact: React.FC<{}> = () => {

    return (
        <ContainerBarContact>
            {Object.entries(socialNetwork).splice(0, 3).map(([key, value]) => (
                <SocialNetwork key={key} icon={() => <Icon name={key}/>} url={value.href} name={value.name}/>
            ))}
        </ContainerBarContact>
    )
}