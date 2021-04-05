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
                        <MDBView
                            className={'w-100 h-100 flex-grow-1'}>
                            <div className={'w-100 h-100 flex-grow-1 foreground'}  style={{position:'absolute',top:0, left:0,zIndex:-1,backgroundImage: `url("${item.src}")`, backgroundPosition: 'center center', backgroundSize: 'cover'}}> </div>
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