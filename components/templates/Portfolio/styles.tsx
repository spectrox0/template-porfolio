import styled from "styled-components";
import {
    animationSidebar,
    breakpoint,
    heightFooter,
    heightNavbar,
    paletteColorsDark,
    widthSidebar
} from "@/styles/variables";
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
    top: calc(${heightNavbar} + .3rem);
    right: 1.5rem;
    width: 2.5rem;
    opacity: 0.8;
    font-size: 1.5em;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px #fff;
    border-right: solid 1px #fff;
    box-shadow: 0 0 2px inset #fff;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.4);
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
    margin: 0 auto;
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
      padding-bottom: calc(${heightFooter} + 1rem);
    }
    @media screen and (max-width: ${breakpoint.md}) {
      padding-left: 0 !important;
    }
  }
`