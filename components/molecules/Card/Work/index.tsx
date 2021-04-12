import * as React from 'react';
import {ContainerCardWork} from './styles'
import {onMouseLeave, onMouseOver} from '../../../../helpers/cursor'
import {WorkDesign} from "../../../../models/WorkDesign";
import {CloudinaryImage} from "../../../atoms/Image/Cloudinary";

interface Props {
    onClick: () => void
}

export const CardWork: React.FC<Props & WorkDesign> = ({
                                                           image,
                                                           skills,
                                                           description,
                                                           date,
                                                           images,
                                                           link,
                                                           name,
                                                           id,
                                                           onClick,
                                                       }) => {


    return (
        <ContainerCardWork onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={onClick}>
            <CloudinaryImage image={image} alt={name}/>
            <div className={'info'}>
                <h4> {name}</h4>
            </div>
        </ContainerCardWork>
    )
}