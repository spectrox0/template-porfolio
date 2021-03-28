  import styled from "styled-components";
import {fontFamily, paletteColorsDark} from "../../../styles/variables";
  export const ContainerDonutChartSkill = styled.div`
  position: relative;
  .icon {
  color: ${paletteColorsDark.primary};
  position: absolute;
  opacity: 0.2;
  z-index: -2;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  max-width:40%;
  max-height: 40%;
  font-size: 4em;
  }
  .name {
  text-transform: capitalize;
  }
  `