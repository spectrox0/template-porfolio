import * as React from 'react';
import {ScreenLoading} from "@/components/molecules/ScreenLoading";
import {ContainerPortfolioTemplate} from './styles'
import {Sidebar} from "@/components/molecules/Sidebar";
import PerfectScrollbar from 'react-perfect-scrollbar'
import {propsPageSimple} from "../../../utils/animations/transitionPage";
import {AiOutlineFullscreen, AiOutlineFullscreenExit} from "react-icons/ai";
import {categoriesWork} from "../../../config";
import {GridWork} from "../../organisms/Grid/Work";
import {WorkDesign} from "../../../models/WorkDesign";


interface Props {
    works: WorkDesign[]
}

export const PortfolioTemplate: React.FC<Props> = ({works}) => {
    const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>((() => window.innerWidth > 700)())
    const [currentCategory, setCategory] = React.useState<string>('all')
    const filterWork = () => {
        if (currentCategory === 'all') {
            return works
        } else return works.filter((item) => item.category === currentCategory)
    }
    const computedWork = React.useMemo(() => {
        return filterWork()
    }, [currentCategory])
    return (
        <>
            <PerfectScrollbar>
                <ContainerPortfolioTemplate isOpenSidebar={isOpenSidebar} {...propsPageSimple}>
                    <ScreenLoading loading={false}/>
                    <div className={'toggle'} onClick={() => setOpenSidebar(prevState => !prevState)}>
                        {!isOpenSidebar ? <AiOutlineFullscreenExit/> : <AiOutlineFullscreen/>}
                    </div>
                    <Sidebar title={'works'}
                             category={currentCategory}
                             setCategory={setCategory}
                             items={[{key: 'all', name: "All",}, ...categoriesWork]}
                             isOpen={isOpenSidebar}/>
                    <div className={'wrapper-portfolio'}>
                        <GridWork works={computedWork}/>
                    </div>
                </ContainerPortfolioTemplate>
            </PerfectScrollbar>
        </>
    )
}