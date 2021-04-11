import styled, {keyframes} from "styled-components";
import {paletteColorsDark} from "@/styles/variables";

interface Props {
    active: boolean
}

const animation = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0,0,0);
  }
  100% {
    transform: rotate(360deg) translate3d(0,0,0);
  }
`
export const ContainerPlayerMusic = styled.label<Props>`
  outline: none;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px ${({active}) => active ? paletteColorsDark.primary : "#fff"};
  border-left: solid 1px ${({active}) => active ? paletteColorsDark.primary : "#fff"};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  color: ${({active}) => active ? paletteColorsDark.primary : "#fff"};
  transform: translate3d(0,0,0);
  &:hover {
    opacity: 0.8;
    border-color: ${({active}) => !active ? paletteColorsDark.primary : "#fff"};
    color: ${({active}) => !active ? paletteColorsDark.primary : "#fff"};
  }

  &.active {
    animation: ${animation} 3s linear infinite forwards;
  }

`