import * as React from 'react';
import {Main} from './styles'
import {BackgroundAbsolute} from "../../../atoms/Background/Absolute";
import {Navbar, Route} from "../../../molecules/Navbar";
import {CustomParticles} from "../../../atoms/Particles";
import {Cursor, Props as PropsCursor} from "../../../atoms/Cursor";
import {AiOutlineAppstore, AiOutlineContacts, AiOutlineHome} from "react-icons/ai";
import {ImProfile} from "react-icons/im";
import {useIntl} from "react-intl";

interface Props {

}


export const Layout: React.FC<Props> = ({children}) => {
    const [isOpenCollapse, setIsOpenCollapse] = React.useState<boolean>(false)
    const {formatMessage : t} = useIntl()
    const routesNavbar: Route[] = [
        {
            route: '/',
            text: t({id: 'home'}) ,
            icon: (props) => <AiOutlineHome {...props} />,
        },
        {text: t({id: 'about'}), route: '/about' , icon: (props) => <ImProfile {...props} />},
        {text: t({id: 'portfolio'}), route: '/portfolio' , icon: (props) => <AiOutlineAppstore {...props} />},
        {text: t({id: 'contact'}), route: '/contact', icon: (props) => <AiOutlineContacts {...props} /> }]

    return (
        <Main>
            <BackgroundAbsolute
                url={require('images/background_two.jpg?webp')}/>
            <CustomParticles/>
            <div className={'wrapper'}>
                <Navbar routes={routesNavbar} isOpen={isOpenCollapse}/>
                {children}
            </div>
            <Cursor/>
        </Main>
    )

}