import styled from "styled-components";
import {Props} from "./index";
import {heightFooter, heightNavbar, paletteColorsDark} from "../../../../../styles/variables";
import {motion} from "framer-motion";


export const ContainerModalWork = styled(motion.div)<Props>`
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 0 auto;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: calc(1% + .2rem);

  .modal-inner {
  padding-bottom: calc(${heightFooter} + 5rem);
  }

  .row {
    margin: 0;
  }


  .img-background {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 100%;
    width: 100%;
    object-position: center center;
    object-fit: cover;
    opacity: 0.7;
  }
  .img-contain {
    position: absolute;
    top:0;
    left:0;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    object-fit: contain;
    object-position: center center;
  }
  

  .carousel-inner {
    overflow: hidden;

    &, img {
      border-radius: 10px;
    }

  }

  .options-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

export const ContainerBackdrop = styled(motion.div)`
  z-index: 10;
  background-color: ${paletteColorsDark.background};
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
