import styled from "styled-components";
import {paletteColorsDark, primaryFontFamily} from '@/styles/variables'

interface Props {
    colorText?: string,
    theme?: string

}

export const ContainerItemNavigation = styled.li<Props>`
  font-family: ${primaryFontFamily};
  color: #fff;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a, .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 .5rem;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 500;
    font-size: .75em;
    position: relative;
    color: #fff;

    &:after, &:before {
      content: "";
      position: absolute;
      width: 0;
      transition: width .4s ease-in-out;
      height: 1px;
    }

    &:after {
      background-image: linear-gradient(to left, ${paletteColorsDark.primaryColorTransparent(0)}, ${paletteColorsDark.primary}, ${paletteColorsDark.primaryColorTransparent(0)});
      bottom: -.5rem;
      right: 0;
    }

    &:before {
      background-image: linear-gradient(to right, ${paletteColorsDark.primaryColorTransparent(0)}, ${paletteColorsDark.primary}, ${paletteColorsDark.primaryColorTransparent(0)});
      top: -.5rem;
      left: 0;
    }
  }

  .icon {
    font-size: 2em;
    transition: all .4s ease-in-out;
    transform-origin: center center;
  }

  &:hover, &.active {
    .icon {
      transform: scale(1.3);
      color: ${paletteColorsDark.primary};
    }

    span {
      text-shadow: 0 0 2px ${({colorText}) => colorText || '#fff'};

      &:before, &:after {
        width: 100%;
      }
    }
  }
`