import styled from "styled-components";
import {Props} from "./index";
import {breakpoint, heightNavbar, paletteColorsDark} from "../../../../../styles/variables";
import {motion} from "framer-motion";


export const ContainerModalWork = styled(motion.div)<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  overflow: hidden;
  max-width: ${breakpoint.lg};
  max-height: 100vh;
  width:100%;
  .modal-inner {
    max-height: 100vh;
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
  .carousel-inner {
    overflow: hidden;
    &,img {
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