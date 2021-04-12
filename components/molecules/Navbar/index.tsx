import * as React from 'react'
import {ContainerNavbar} from './styles'
import {ItemNavigation} from "@/components/atoms/ItemNavigation";
import {useRouter} from "next/router";

export interface Route {
    text?: string
    route: string
    icon?: React.FunctionComponent<any> | null
}

interface Props {
    isOpen?: boolean
    routes: Route[]
}


export const Navbar: React.FC<Props> = ({isOpen = false, routes}) => {

    const {pathname, locale} = useRouter();
    return (
        <ContainerNavbar isOpen={isOpen}>
            <div className={'navbar-inner'}>
                <ul className={'navigation-menu'}>
                    {routes.map((item, key: number) => (
                        <ItemNavigation icon={item.icon} text={item.text} route={item.route} key={key}
                                        locale={locale || 'en'}
                                        isActive={pathname === item.route}/>
                    ))}
                </ul>
            </div>
        </ContainerNavbar>
    )
}