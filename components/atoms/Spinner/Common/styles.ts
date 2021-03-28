import styled, {keyframes} from "styled-components";
import {paletteColorsDark} from "@/styles/variables"

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const ContainerSpinner = styled.div`
  .spinner {
    position: absolute;
    height: 60px;
    width: 60px;

    border-top: 1px solid ${paletteColorsDark.primary};
    border-left: 1px solid ${paletteColorsDark.primary};
    box-shadow: 0 0 20px ${paletteColorsDark.primary};
    top: 50%;
    left: 50%;
    margin: -30px;
    border-radius: 50%;
    animation: ${animation} 2s linear infinite;
  }

  .spinner:before, .spinner:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 20px ${paletteColorsDark.primary};
  }

  .spinner:before {
    border-top: 1px solid ${paletteColorsDark.primary};
    border-left: 1px solid ${paletteColorsDark.primary};
    border-bottom: 1px solid ${paletteColorsDark.primary};
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    animation: ${animation} 3s linear infinite;
  }

  .spinner:after {
    border-top: 1px solid ${paletteColorsDark.primary};
    border-right: 1px solid ${paletteColorsDark.primary};
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    animation: ${animation} 4s linear infinite;
  }


`