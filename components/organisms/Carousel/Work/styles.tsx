import styled from "styled-components";
import {MDBCarousel} from "mdbreact";


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

  .image-foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: block;
    img {
      object-position: center center;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &:after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.7;
      width: 100%;
      height: 100%;
    }
  }

  .image-carousel {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: contain;
    object-position: center center;
  }

  .carousel-indicators li {
    background-color: #fff;
  }
`