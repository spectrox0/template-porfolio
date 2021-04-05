import styled, {keyframes} from "styled-components";
import {Props} from "./index";
import {paletteColorsDark} from "../../../styles/variables";

const animation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0)  rotate(360deg);
  }
`
export const ContainerCursor = styled.div<Props>`
  position: absolute;
  z-index: 999;
  width: 2.5rem;
  height: 2.5rem;
  border-top: solid 1px ${paletteColorsDark.primary};
  border-left: solid 1px ${paletteColorsDark.primary};
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(-50%, -50%, 0);
  @media screen and (hover: none) and (pointer: coarse) {
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    border-bottom: solid 1px ${paletteColorsDark.primary};
    border-right: solid 1px ${paletteColorsDark.primary};

    border-radius: 50%;
  } 
&,:after{
  border-color: white;
  box-shadow: inset 0 0 2px #fff;
}
  &.hover {
    &, &:after {
      border-color: ${paletteColorsDark.primary};
      box-shadow: inset 0 0 2px ${paletteColorsDark.primary};
    }
    animation: ${animation} .5s linear infinite forwards;
  }
`