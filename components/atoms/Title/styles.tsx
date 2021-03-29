import styled from "styled-components";
import {primaryFontFamily} from "../../../styles/variables";

interface Props {
    fontSize?: string,
    color?: string,
    fontWeight?: string | number
    alignText?: string
}

export const ContainerTitle = styled.div<Props>`
  position: relative;
  flex: 1;
  display: flex;
  h1, h2, h3, h4, h5, h6 {
    color: ${({color}) => color || "#fff"};
    font-family: ${primaryFontFamily};
    flex: 1;
    letter-spacing: 0.13em;
    display: inline-block;
    line-height: 1.3em;
    font-weight: ${({fontWeight}) => fontWeight || 300};;
    font-size: ${({fontSize}) => fontSize || "2em"};
    margin: 0;
    padding: 0;
    text-align: ${({alignText}) => alignText || 'center'};
    background-image: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  b, strong {
    font-weight: 600;
  }

  &.underline {
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 1px;
      width: calc(100% - 30px);
      background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.1));
    }
  }
`