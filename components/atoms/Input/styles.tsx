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
    &:not(:placeholder-shown):not(:valid) {
      & + .effect-underline {
        width: 100%;
        background-image: linear-gradient(to right,${paletteColorsDark.errorTransparent(0)}, ${paletteColorsDark.error}, ${paletteColorsDark.errorTransparent(0)});
      }
  }
    /* Show green borders when valid */
     &:valid:focus{
      & + .effect-underline {
        width: 100%;
        background-image: linear-gradient(to right,${paletteColorsDark.primaryColorTransparent(0)}, ${paletteColorsDark.primary}, ${paletteColorsDark.primaryColorTransparent(0)});
      }
    }
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
  .effect-underline {
    z-index: 2;
    content: "";
    position: absolute;
    left:50%;
    height: 2px;
    width: 0;
    transition: width .4s ease-in-out;
    transform: translate3d(-50% ,0 ,0 );
    opacity: 1;
    bottom: 0;
  }
  
`