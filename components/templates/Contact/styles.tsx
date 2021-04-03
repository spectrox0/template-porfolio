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
    padding-bottom: calc(${heightFooter} + 20%);
  }
`