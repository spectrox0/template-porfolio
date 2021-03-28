import styled from "styled-components";
import {animationSidebar, breakpoint, heightNavbar, paletteColorsDark, widthSidebar} from "@/styles/variables";
import {motion} from "framer-motion";

interface Props {
    isOpenSidebar: boolean
}
export const ContainerPortfolioTemplate = styled(motion.section)<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  .toggle {
    position: fixed;
    top: calc(${heightNavbar} + .5rem);
    font-size: 1.2em;
    left:.5rem;
    width: 1.8rem;
    opacity: 0.8;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
    box-shadow: 0 0 2px inset #fff;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    z-index: 5;
    cursor: pointer;
    color: #fff;
    &:hover {
      border-color: ${paletteColorsDark.primary};
      color: ${paletteColorsDark.primary};
    }
    &:active {
      opacity: 0.7;
    }
  }
  .wrapper-portfolio {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    padding-left:${({isOpenSidebar}) => isOpenSidebar? widthSidebar : 0 };
    padding-top: ${heightNavbar};
    height: 100%;
    transform: translate3d(0 , 0 , 0);
    transition: padding-left ${animationSidebar};
    .container {
      padding: 1rem;
      max-width: none;
    }
    @media screen and (max-width: ${breakpoint.md}) {
      padding-left: 0 !important;
    }
  }
`