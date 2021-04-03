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
import firebase from "firebase";
import {ModalWork} from "../../organisms/Modal/FullSize/Work";
import {EnumSkill} from "../../../models/Skill";

const Timestamp = firebase.firestore.Timestamp;
const works: WorkDesign[] = [
    {
        img: {
            src: "https://picsum.photos/200/400?image=1050"
        },
        date: Timestamp.now(),
        description: {
            en: "Esto es un ejemplo descripcion",
            es: "Esto es un ejemplo de descripcion"
        },
        images: [{
            src: "https://picsum.photos/200/400?image=1050"
        }, {src: "https://picsum.photos/600/400?image=210"},
            {src: "https://picsum.photos/400/400?image=1250"}],
        link: "/contact",
        name: "Titulo del proyecto",
        id: 1,
        skills: [EnumSkill.firebase, EnumSkill.react, EnumSkill.css3, EnumSkill.sap, EnumSkill.typescript]
    },
    {
        img: {
            src: "https://picsum.photos/200/300?image=120"
        },
        date: Timestamp.now(),
        description: {
            en: "sas",
            es: "sas"
        },
        images: [{
            src: "https://picsum.photos/200/400?image=450"
        }, {src: "https://picsum.photos/600/400?image=431"},
            {src: "https://picsum.photos/400/400?image=341"}],
        link: "",
        name: "hii",
        id: 2,
        skills: []
    }
    ,
    {
        img: {
            src: "https://picsum.photos/200/300?image=400"
        },
        images: [{
            src: "https://picsum.photos/231/400?image=131"
        }, {src: "https://picsum.photos/600/400?image=540"},
            {src: "https://picsum.photos/400/400?image=640"}],
        date: Timestamp.now(),
        description: {
            en: "sas",
            es: "sas"
        },
        link: "",
        name: "hii",
        id: 2,
        skills: []
    }


]

export const PortfolioTemplate: React.FC = () => {
    const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>((() => window.innerWidth > 700)())
    const [propsModal, setPropsModal] = React.useState({})
    const changeWork = (work: WorkDesign, coordinate, size): void => {
        setPropsModal({
            work,
            coordinate,
            size
        })
    }
    const closeWork = () => {
        setPropsModal({})
    }
    return (
        <>
            <PerfectScrollbar>
                <ContainerPortfolioTemplate isOpenSidebar={isOpenSidebar} {...propsPageSimple}>
                    <ScreenLoading loading={false}/>
                    <div className={'toggle'} onClick={() => setOpenSidebar(prevState => !prevState)}>
                        {!isOpenSidebar ? <AiOutlineFullscreenExit/> : <AiOutlineFullscreen/>}
                    </div>
                    <Sidebar title={'Works'} items={categoriesWork} isOpen={isOpenSidebar}/>
                    <div className={'wrapper-portfolio'}>
                        <GridWork works={works} onClick={changeWork}/>
                    </div>
                </ContainerPortfolioTemplate>
            </PerfectScrollbar>
            <ModalWork {...propsModal} close={closeWork}/>
        </>
    )
}