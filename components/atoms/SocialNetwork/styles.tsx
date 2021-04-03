import styled from "styled-components";
import {paletteColorsDark} from "../../../styles/variables";


export const ContainerSocialNetwork = styled.a`
  backdrop-filter: blur(3px);
  border-radius: 50%;
  height: 2.5rem;
  margin-right: .5rem;
  margin-left: .5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:after, &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    box-shadow: 0 0 3px inset ${paletteColorsDark.primary};
    border-radius: 50%; 
    transition: all .3s ease-in-out;
    opacity: 0.6;
  }
  &:before {
    width: 112%;
    height: 112%;
    border-top: solid 1px ${paletteColorsDark.primary};
  }
  &:after {
    border-left: solid 1px ${paletteColorsDark.primary};
}

  svg {
    font-size: 1.6em;
  }

  &:hover {

    &:after, &:before {
      transform: translate(-50%, -50%) scale(1);
    }

    svg {
      fill: ${paletteColorsDark.primary};
    }
  }
`