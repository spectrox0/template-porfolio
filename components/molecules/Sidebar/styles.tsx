import styled from "styled-components";
import {animationSidebar, breakpoint, heightNavbar, widthSidebar} from "@/styles/variables";


interface Props {
    isOpen?: boolean,
}
export const ContainerSidebar = styled.div<Props>`
  position: fixed;
  padding: .8rem .6rem;
  bottom: 0;
  left:0;
  border-right: solid 1px rgba(0,0,0,0.1);
  width: ${widthSidebar};
  transform: translate3d( ${({isOpen}) => isOpen? 0 : '-100%'}, 0 ,0);
  transition: transform ${animationSidebar};
  max-width: 100%;
  z-index: 2;
  height: calc(100% - ${heightNavbar});
  background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) 0, transparent);
 
`