import * as React from 'react';
import {useRouter} from "next/router";
import {ContainerFooter} from "./styles";
import {BarContact} from "../../molecules/BarContact";
import dynamic from 'next/dynamic'

const locales = [
    {key: 'en', src: require('images/united-states.svg').default},
    {key: 'es', src: require('images/spain.svg').default},
]
const Player = dynamic(() => import ("../../atoms/Music").then(mod => mod.Player), {ssr: false})

interface Props {

}

export const Footer: React.FC<Props> = () => {
    const router = useRouter()
    const changeLocale = (value: string): void => {
        const locale = value;
        router.push({...router}, router.pathname, {locale}).then(() => ({}))
    }
    return (
        <ContainerFooter>
            <BarContact/>
            <Player url={"/music/attack_titan.mp3"} className={'my-3 mx-2'}/>
            <div className={'select-locale my-2'}>
                {locales.map((item) => (
                    <div key={item.key} className={'container-img'}>
                        <img className={item.key === router.locale ? 'active' : ''} alt={item.key}
                             src={item.src} onClick={() => changeLocale(item.key)}/>
                    </div>
                ))}
            </div>
        </ContainerFooter>
    )
}