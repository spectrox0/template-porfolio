import * as React from 'react';
import {useRouter} from "next/router";
import {ContainerFooter} from "./styles";
import {BarContact} from "../../molecules/BarContact";


const locales = [
    {key: 'en', src: require('images/united-states.svg')},
    {key: 'es', src: require('images/spain.svg')},
]
interface Props {

}
export const Footer:React.FC<Props> = () => {
    const router = useRouter()
    const changeLocale = (value: string): void => {
        const locale = value;
        router.push(router.pathname, router.pathname, {locale}).then(() => ({}))
    }
    return (
        <ContainerFooter>
            <BarContact/>
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