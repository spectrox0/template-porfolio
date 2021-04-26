import styled from "styled-components";
import {heightFooter, heightNavbar} from "../../../styles/variables";


export const ContainerTemplateWork = styled.section`
  position: absolute;
  width: 100%;
  height: calc(100% - ${heightNavbar});
  left: 0;
  bottom: calc(${heightFooter} + 1rem);
`
