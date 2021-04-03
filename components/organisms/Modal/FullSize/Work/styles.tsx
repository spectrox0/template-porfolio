import styled from "styled-components";
import {Props} from "./index";
import {breakpoint, paletteColorsDark} from "../../../../../styles/variables";
import {motion} from "framer-motion";


export const ContainerModalWork = styled(motion.div)<Props>`

  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  max-width: ${breakpoint.xl};
  height: 100%;
  max-height: 60rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  z-index: 999;
  background-color: ${paletteColorsDark.backgroundTransparent(0.8)};
  border-radius: 10px;

  .row {
    margin: 0;
  }

  .container-work {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: calc(.4rem + 2%);
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

  .options-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

export const ContainerBackdrop = styled(motion.div)`
    z-index: 998;
    background-color: ${paletteColorsDark.background};
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
  `