import * as React from "react";
import {useEffect} from "react";
import {ContainerHomeTemplate} from "./styles";
import {BarContact} from "../../molecules/BarContact";

import {propsPage} from "../../../utils/animations/transitionPage"

import {init} from './AnimatedText'
import {useRouter} from "next/router";
import {Button} from "../../atoms/Button/Common";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Title} from "../../atoms/Title";

const locales = [
    {key: 'en', src: require('images/united-states.svg')},
    {key: 'es', src: require('images/spain.svg')},
]

export const HomeTemplate: React.FC = () => {
    useEffect(() => {
            init([
                'Engineer Software',
                'SAP Architecture',
                'UI/UX Design',
            ])
        }, []
    )
    const router = useRouter()
    const changeLocale = (value: string): void => {
        const locale = value;
        router.push(router.pathname, router.pathname, {locale}).then(() => ({}))
    }
    return (
        <ContainerHomeTemplate id={'container-home'} {...propsPage}>
            <BarContact/>
            <div className="container d-flex flex-column align-items-center">
                <Title fontSize={'3em'} tagTitle={'h1'}> Viviana <strong> Tepedino </strong></Title>
                <h3 className='text'/>
                <Button className={'pl-4 pr-3'}>
                    Check my Works <AiOutlineArrowRight size={'1em'}/>
                </Button>
            </div>
            <div className={'select-locale'}>
                {locales.map((item) => (
                    <div key={item.key} className={'container-img'}>
                        <img className={item.key === router.locale ? 'active' : ''} alt={item.key}
                             src={item.src} onClick={() => changeLocale(item.key)}/>
                    </div>
                ))}
            </div>
        </ContainerHomeTemplate>
    )
}
