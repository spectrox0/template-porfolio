import styled from "styled-components";
import {paletteColorsDark} from "../../../styles/variables";

interface Props {
    color?: string
}

export const ContainerService = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .icon {
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 50%;
    border-top: solid 1px #fff;
    border-right: solid 1px #fff;
    box-shadow: 0 0 3px inset #fff;
    color: ${({color}) => color || paletteColorsDark.primary};
    font-size: 4em;

    svg {
      max-width: 90%;
      max-height: 90%;
    }
  }
`