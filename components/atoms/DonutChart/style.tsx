import styled from "styled-components";
import {paletteColorsDark, primaryFontFamily} from "@/styles/variables";

interface Props {
    active: boolean,
    color?: string
}

export const ContainerDonutChart = styled.svg<Props>`
  display: block;
  margin: 0 auto;
  max-width: 70%;
  max-height: 250px;
  transition: all 1s ease-in-out;
  opacity: ${({active}) => (active ? 1 : 0)};

  .circle-bg {
    fill: none;
    stroke: #eee;
    opacity: 0.2;
    stroke-width: 1;
  }

  .circle {
    fill: none;
    stroke-width: 1.2;
    stroke-linecap: round;
    stroke: ${({color}) => color || paletteColorsDark.primary};
    opacity: 0.5;
    //transition: all 1s ease-in-out;
    ${({active}) => (active ? '' : 'stroke-dasharray: 0 100;')}
  }

  .percentage {
    fill: #fff;
    font-family: ${primaryFontFamily};
    font-size: 0.3em;
    text-anchor: middle;
  }
`