import styled from "styled-components";
import {paletteColorsDark} from "../../../styles/variables";


export const ContainerSkill = styled.span`
  border-radius: 500px;
  box-shadow: inset 0 0 3px ${paletteColorsDark.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-top: solid 1px ${paletteColorsDark.primary};
  border-left: solid 1px ${paletteColorsDark.primary};
  color: ${paletteColorsDark.primary};
  padding: .5rem 1rem;
  text-transform: capitalize;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`