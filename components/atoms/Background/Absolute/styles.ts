import styled from "styled-components";
import {Props} from "./index";


export const Div = styled.div<Props>`
  position: absolute;
  z-index: ${({zIndex}) => zIndex || 0};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${({url}) => url}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({position}) => position || 'center'};
  background-attachment: fixed;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({colorBackdrop}) => colorBackdrop};
    opacity: ${({opacityBackdrop}) => opacityBackdrop};
  }
`

