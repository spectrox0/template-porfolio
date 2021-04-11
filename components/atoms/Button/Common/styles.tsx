import styled from "styled-components";
import {fontFamily,primaryFontFamily, paletteColorsDark} from "../../../../styles/variables";

interface Props {
    color?: string
    classNameButton?: string
    fontSize?:string,
}
export const ContainerButton = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem auto ;
  background-color: rgba(0,0,0,0.3);
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  transition: opacity 0.2s ease-in-out;
  button {
    font-family: ${primaryFontFamily};
    color:  rgba(255,255,255,0.6);
    overflow: hidden;
    font-weight: 300;
    flex: 1;
    padding: .7rem .8rem;
    font-size: ${({fontSize}) => fontSize || '1.3em'};
    height: 100%;
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;
    border-radius: 10px;
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
   &:hover ,&.active {
      button {
        color: ${ ({color}) => color || paletteColorsDark.primary};
        text-shadow: 0 0 3px ${({color}) => color || paletteColorsDark.primary};
      }
           &:after,&:before {
              border-color:${ ({color}) => color || paletteColorsDark.primary};
               box-shadow: inset 0 0 3px ${ ({color}) => color || paletteColorsDark.primary};;
              }
    }
    &:active {
    opacity: 0.7;
    }
`