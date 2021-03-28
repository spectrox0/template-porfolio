import styled from "styled-components";
import {fontFamily, paletteColorsDark} from "../../../../styles/variables";


export const ContainerButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem auto ;
  background-color: rgba(0,0,0,0.2);
  max-width: 400px;
  border-radius: 10px;
  &:hover {
    opacity: 0.6;
    button {
      color: ${paletteColorsDark.primary};
      text-shadow: 0 0 3px ${paletteColorsDark.primary};
    }
  }
  button {
    font-family: ${fontFamily.Montserrat};
    color:  rgba(255,255,255,0.6);
    font-weight: 300;
    flex: 1;
    padding: .7rem .8rem;
    font-size: 1.3em;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;
    svg {
      margin: 0 .5rem;
    }
  }
  &:after,&:before {
    content: "";
    position: absolute;
    z-index: -1;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-radius: 10px;
    box-shadow: inset 0 0 3px #fff;
  }
  &:after {
    border-bottom: solid 1px #fff;
    border-right: solid 1px #fff;
  }
  &:before {
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
    width: calc(100% - .4rem);
    height: calc(100% - .4rem);
  }
`