import * as React from 'react';
import {ContainerCardWork} from './styles'
import {onMouseLeave, onMouseOver} from '../../../../helpers/cursor'
import {WorkDesign} from "../../../../models/WorkDesign";

interface Props {
    onClick: (work: WorkDesign) => void
}

export const CardWork: React.FC<Props & WorkDesign> = ({
                                                           img,
                                                           skills,
                                                           description,
                                                           date,
                                                           images,
                                                           link,
                                                           name,
                                                           id,
                                                           onClick
                                                       }) => {
    const selectWork = React.useCallback(() => {
            onClick({img, name, id, skills, link, images, description, date})
        }
        , [img, name, id, skills, link, images, description, date])

    return (
        <ContainerCardWork onClick={selectWork} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <img src={img.src} alt={name}/>
            <div className={'info'}>
                <h4> {name}</h4>
            </div>
        </ContainerCardWork>
    )
}