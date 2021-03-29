import styled from "styled-components";
import {fontFamily, primaryFontFamily} from "../../../styles/variables";

interface Props {
    fontSize?: string,
    color?: string,
    fontWeight?: string | number
    alignText?: string
}

export const ContainerText = styled.p<Props>`
  margin: 0;
  padding: 0;
  color: ${({color}) => color || "#fff"};
  font-family: ${primaryFontFamily};
  letter-spacing: 0.11em;
  line-height: 1.3em;
  font-weight: ${({fontWeight}) => fontWeight || 300};;
  font-size: ${({fontSize}) => fontSize || "1.1em"};;
  text-align: ${({alignText}) => alignText || 'left'};
  background-image: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`