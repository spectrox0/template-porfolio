import styled from "styled-components";
import {motion} from "framer-motion";
import {breakpoint, heightNavbar} from "../../../styles/variables";

export const ContainerAbout = styled(motion.section)`
  position: absolute;
  width: 100%;
  height: calc(100% - ${heightNavbar});
  left: 0;
  bottom: 0;
  padding: calc(1% + .2rem);
  .container {
    max-width: ${breakpoint.lg};
    width:100%;
    height: auto;
    padding: calc(1% + .2rem);
    
    margin: 0 auto;
  }
  .container-info {
    position: relative;
    max-width: 95%;
    width: 60rem;
    margin-left: auto;
    z-index: 3;
    backdrop-filter: blur(2px);
    transform: translate3d(0,0,0);
    margin-top: -25%;
    padding: calc(1% + .2rem);
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    min-height: 30rem;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0, 0.1));
    border-radius: 10px;
  }
`