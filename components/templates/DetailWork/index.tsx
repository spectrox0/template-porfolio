import * as React from 'react';
import {ModalWork} from "../../organisms/Modal/FullSize/Work";
import {ContainerTemplateWork} from "./styles";
import {WorkDesign} from "../../../models/WorkDesign";
import PerfectScrollbar from "react-perfect-scrollbar";

interface Props {
    work: WorkDesign,
    back: () => void
}

export const TemplateDetailWork: React.FC<Props> = ({work, back}) => {

    return (
        <PerfectScrollbar>
            <ContainerTemplateWork>
                <ModalWork close={back} work={work}/>
            </ContainerTemplateWork>
        </PerfectScrollbar>
    )
}
