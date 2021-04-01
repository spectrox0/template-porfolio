import styled from "styled-components";
import {fontFamily, paletteColorsDark} from "../../../../styles/variables";


export const ContainerCardWork = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  transition: opacity .3s ease-in-out;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transition: transform .3s ease-in-out;
  }
  &:after, &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left:50%;
    transform: translate(-50% , -50%);
    box-shadow: 0 0 3px inset rgba(255,255,255,0.6);
    width: 100%;
    height: 100%;
  }
  &:before {
    border-top: solid 1px rgba(255,255,255,0.5);
    border-left: solid 1px rgba(255,255,255,0.5);
    width: calc(100% - .5rem);
    height: calc(100% - .5rem);
  }
  &:after {
    border-bottom: solid 1px rgba(255,255,255,0.5);
    border-right: solid 1px rgba(255,255,255,0.5);
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background-color: rgba(0,0,0,0.5);
    transition: opacity .5s ease-in-out;
    h4 {
      font-size: 1.3em;
      font-family: ${fontFamily.Montserrat};
      letter-spacing: 0.12em;
      font-weight: 400;
      padding: 0;
      margin:0;
      color: ${paletteColorsDark.primary};
      text-shadow: 0 0 3px ${paletteColorsDark.primary};
    }
  }

  &:hover {
    img {
      transform: scale(1.15) rotate(-5deg);
    }
    .info {
      opacity: 1;
    }
  }
  &:active {
    opacity: 0.8;
  }
`