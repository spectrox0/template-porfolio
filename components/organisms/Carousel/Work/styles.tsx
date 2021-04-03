import styled from "styled-components";
import {MDBCarousel} from "mdbreact";
import {paletteColorsDark} from "../../../../styles/variables";


export const ContainerCarouselWork = styled(MDBCarousel)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .view {
    width: 100%;
    height: 100%;
  }
  .image-carousel {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .carousel-indicators li {
    background-color: #fff;
  }
`