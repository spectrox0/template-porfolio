import styled from "styled-components";
import {breakpoint, paletteColorsDark} from "../../../../styles/variables";

interface Props {
    type: string
}

export const ContainerAlert = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: center;

  .backdrop {
    z-index: 1;
    background-color: ${paletteColorsDark.background};
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .container-alert {
    position: relative;
    margin: 1em;
    z-index: 2;
    max-width: ${breakpoint.md};
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    background-color: ${paletteColorsDark.backgroundTransparent(0.8)};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: calc(.4rem + 2%);
  }
`