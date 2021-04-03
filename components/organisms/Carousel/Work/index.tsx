import * as React from 'react'
import {ContainerCarouselWork} from "./styles";
import {MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";
import {Image} from "../../../../models/Image";

interface Props {
    images: Image[]
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
                {images.map((item,key) => (
                    <MDBCarouselItem key={key} itemId={key + 1}>
                        <MDBView>
                            <img
                                className="d-block w-100 h-100 image-carousel"
                                src={item.src}
                                alt=""
                            />
                        </MDBView>
                    </MDBCarouselItem>
                ))}

            </MDBCarouselInner>
        </ContainerCarouselWork>
    )
}