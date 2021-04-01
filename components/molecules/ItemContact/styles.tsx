import styled from "styled-components";
import {paletteColorsDark} from "../../../styles/variables";


export const ContainerItemContact = styled.div`
  max-width: 15rem;
  flex: 1;

  .icon {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    svg {
      width: 3rem;
      height: 100%;
      color: #fff;
    }
  }
  p, h3 ,h4,h2,h1,h6 {
    text-align: center;
  }
  &:hover .icon svg {
    color: ${paletteColorsDark.primary};
  }
`