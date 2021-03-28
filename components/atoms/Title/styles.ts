import styled from "styled-components";
import {fontFamily} from "../../../styles/variables";

interface Props {
    fontSize?: string,
    color?: string,
    fontWeight?: string | number
    alignText?: string
}

export const ContainerTitle = styled.div<Props>`
  flex: 1;
  position: relative;
  display:flex;
  flex-direction: column;
  h1, h2, h3, h4, h5, h6 {
    color: ${({color}) => color || "#fff"};
    font-family: ${fontFamily.Montserrat};
    letter-spacing: 0.13em;
    line-height: 1.3em;
    font-weight: ${({fontWeight}) => fontWeight || 300};;
    font-size: ${({fontSize}) => fontSize || "2em"};;
    text-align:  ${({alignText}) => alignText || 'center'};
    background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.1));
    text-shadow:  0 0 8px rgba(255,255,255, 0.4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  b, strong {
    font-weight: 600;
  }
  &.underline {
    &:after {
      content: "";
      position: relative;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.1));
    }
  }
`