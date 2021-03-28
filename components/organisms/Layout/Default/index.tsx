import * as React from 'react';
import {Main} from './styles'
import {BackgroundAbsolute} from "../../../atoms/Background/Absolute";
import {Navbar} from "../../../molecules/Navbar";
import {CustomParticles} from "../../../atoms/Particles";
import {Cursor, Props as PropsCursor} from "../../../atoms/Cursor";

interface Props {

}


export const Layout: React.FC<Props> = ({children}) => {
    const [isOpenCollapse, setIsOpenCollapse] = React.useState<boolean>(false)
    return (
        <Main>
            <BackgroundAbsolute
                url={require('images/background_two.jpg?webp')}/>
            <CustomParticles/>
            <div className={'wrapper'}>
                <Navbar isOpen={isOpenCollapse}/>
                {children}
            </div>
            <Cursor/>
        </Main>
    )

}