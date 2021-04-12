import styled from "styled-components";
import {motion} from "framer-motion";


export const ContainerScreenLoading = styled(motion.div)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.7);

`