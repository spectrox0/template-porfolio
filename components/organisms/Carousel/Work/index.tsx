import * as React from 'react'
import {ContainerCarouselWork} from "./styles";
import {MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";
import {CloudinaryImage} from "../../../atoms/Image/Cloudinary";

interface Props {
    images: string[]
}

export const CarouselWork: React.FC<Props> = ({images}) => {
    return (
        <ContainerCarouselWork
            activeItem={1}
            length={images.length}
            showControls
            showIndicators
            className="z-depth-1"
        >
            <MDBCarouselInner>
                {images.map((item, key) => (
                    <MDBCarouselItem key={key} itemId={key + 1}>
                        <MDBView
                            className={'w-100 h-100 flex-grow-1'}>

                            <CloudinaryImage
                                className="d-block w-100 h-100 image-carousel"
                                alt="" image={item}/>
                        </MDBView>
                    </MDBCarouselItem>
                ))}

            </MDBCarouselInner>
        </ContainerCarouselWork>
    )
}