import styled from "styled-components";
import {Props} from "./index";
import {breakpoint, paletteColorsDark} from "../../../../../styles/variables";
import {motion} from "framer-motion";


export const ContainerModalWork = styled(motion.div)<Props>`

  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: calc(100% - 1rem);
  max-width: ${breakpoint.xl};
  height: calc(100% - 1rem);
  max-height: 60rem;
  z-index: 999;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
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
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
  `