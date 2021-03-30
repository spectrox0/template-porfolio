import styled from "styled-components";
import {paletteColorsDark, paletteColorsLight, primaryFontFamily} from "../../../styles/variables";

interface Props {
    textarea?: boolean
}
export const ContainerInput = styled.div<Props>`
  position: relative;
  flex: 1;
  height: ${({textarea}) => textarea? '100%' : 'auto'};
  label, input, textarea{
    color: #fff;
  }

  label {
    position: absolute;
  }
  textarea {
    height: 100%;
    resize: none;
  }
  input,textarea {
    width: 100%;
    outline: none;
    padding: .5em .8em;
    letter-spacing: 0.11em;
    border: none;
    background-color: transparent;
    font-family: ${primaryFontFamily};
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    left:0;
    height: 1px;
    width: 100%;
    opacity: 0.3;
    bottom: 0;
  }
  &:before {
    z-index: 2;
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, ${paletteColorsDark.primary}, ${paletteColorsDark.primaryColorTransparent(0)});
    left:0;
    height: 1px;
    width: 0;
    transition: width .4s ease-in-out;
    opacity: 1;
    bottom: 0;
  }
  
`