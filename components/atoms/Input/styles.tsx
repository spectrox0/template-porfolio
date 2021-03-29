import styled from "styled-components";
import {paletteColorsDark, primaryFontFamily} from "../../../styles/variables";


export const ContainerInput = styled.div`
  position: relative;
    input {
      outline: none;
      border: none;
      font-family: ${primaryFontFamily};
      color:  ${paletteColorsDark.text};
      
    }
   &:after {
     position: absolute;
     content: "";
     height: 1px;
     bottom: 0;
     left:0;
     width:100%;
   }
`