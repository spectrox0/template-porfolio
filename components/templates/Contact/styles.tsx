import styled from "styled-components";
import {motion} from "framer-motion";
import {heightFooter, heightNavbar} from "../../../styles/variables";


export const ContainerContactTemplate = styled(motion.section)`
  position: absolute;
  width: 100%;
  height: calc(100% - ${heightNavbar});
  left: 0;
  bottom: 0;
  .container {
    margin: 0 auto;
    flex: 1;
    height: calc(100% - ${heightNavbar});
    width: 100%;
    padding: calc(1% + .2rem);
    padding-bottom: calc(${heightFooter} + 1rem);
  }
`