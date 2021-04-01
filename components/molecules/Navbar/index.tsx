import * as React from 'react'
import {ContainerNavbar} from './styles'
import {ItemNavigation} from "@/components/atoms/ItemNavigation";
import {useRouter} from "next/router";
import {AiOutlineAppstore, AiOutlineContacts, AiOutlineHome} from 'react-icons/ai'
import {ImProfile} from "react-icons/im";
interface Route {
    text?: string
    route: string
    icon?: React.FunctionComponent<any> | null
}

interface Props {
    isOpen?: boolean
    routes?: Route[]
}

const routesNavbar: Route[] = [
    {
        route: '/',
        text: 'Home',
        icon: (props) => <AiOutlineHome {...props} />,
    },
    {text: 'About', route: '/about' , icon: (props) => <ImProfile {...props} />},
    {text: 'portfolio', route: '/portfolio' , icon: (props) => <AiOutlineAppstore {...props} />},
    {text: 'Contact', route: '/contact', icon: (props) => <AiOutlineContacts {...props} /> }]

export const Navbar: React.FC<Props> = ({isOpen = false, routes = routesNavbar}) => {
    const {pathname, locale} = useRouter();
    return (
        <ContainerNavbar isOpen={isOpen}>
            <div className={'navbar-inner'}>
                <ul className={'navigation-menu'}>
                    {routes.map((item, key: number) => (
                        <ItemNavigation icon={item.icon} text={item.text} route={item.route} key={key} locale={locale || 'en'}
                                        isActive={pathname === item.route}/>
                    ))}
                </ul>
            </div>
        </ContainerNavbar>
    )
}