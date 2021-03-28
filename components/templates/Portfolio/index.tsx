import * as React from 'react';
import {ScreenLoading} from "@/components/molecules/ScreenLoading";
import {ContainerPortfolioTemplate} from './styles'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {Item, Sidebar} from "@/components/molecules/Sidebar";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {CardWork} from "../../molecules/Card/Work";
import {propsPageSimple} from "../../../utils/animations/transitionPage";
import {AiOutlineFullscreen, AiOutlineFullscreenExit} from "react-icons/ai";

const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=300",
    //...
    "https://picsum.photos/300/300?image=432",
    "https://picsum.photos/300/300?image=542",
    "https://picsum.photos/300/300?image=123",
    "https://picsum.photos/300/300?image=532",
    "https://picsum.photos/300/300?image=666",
    "https://picsum.photos/300/300?image=420",
    "https://picsum.photos/300/300?image=777",
]
const items: Item [] = [
    {
        name: 'SAP'
    }, {
        name: 'Web Development'
    }, {
        name: 'UI/UX design'
    }, {
        name: 'Certificates'
    }
]
export const PortfolioTemplate: React.FC = () => {
    const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>((() => window.innerWidth > 700)())

    return (
        <PerfectScrollbar>
            <ContainerPortfolioTemplate isOpenSidebar={isOpenSidebar} {...propsPageSimple}>
                <ScreenLoading loading={false}/>
                <div className={'toggle'} onClick={() => setOpenSidebar(prevState => !prevState)}>
                    {!isOpenSidebar ? <AiOutlineFullscreenExit/> : <AiOutlineFullscreen/>}
                </div>
                <Sidebar title={'Works'} items={items} isOpen={isOpenSidebar}/>
                <div className={'wrapper-portfolio'}>
                    <div className={'container'}>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1600: 4}}
                        >
                            <Masonry columnsCount={3} gutter="3px">

                                {images.map((image, i) => (
                                    <CardWork key={i} imgSrc={image} name={"sas"}/>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </ContainerPortfolioTemplate>
        </PerfectScrollbar>
    )
}