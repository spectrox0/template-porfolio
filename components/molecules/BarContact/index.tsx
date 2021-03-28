import * as React from 'react';
import {ContainerBarContact} from "./styles";
import {Props as PropsSocialNetwork, SocialNetwork} from "@/components/atoms/SocialNetwork"
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import {FaTelegram} from "react-icons/fa";

interface Props {
    socialNetWorks?: PropsSocialNetwork[]
}

const socialNetworksDefault: PropsSocialNetwork[] = [
    {
        name: 'github',
        url: 'http://github.com',
        icon: (props) => <AiOutlineGithub {...props} />
    },
    {
        name: 'linkedin',
        url: 'http://linkedin.com',
        icon: (props) => <AiOutlineLinkedin {...props} />
    },
    {
        name: 'telegram',
        url: 'http://linkedin.com',
        icon: (props) => <FaTelegram {...props} />
    }
]

export const BarContact: React.FC<Props> = ({socialNetWorks = socialNetworksDefault}) => {

    return (
        <ContainerBarContact>
            {socialNetWorks.map((item, key) => (
                <SocialNetwork key={key} icon={item.icon} url={item.url} name={item.name}/>
            ))}
        </ContainerBarContact>
    )
}