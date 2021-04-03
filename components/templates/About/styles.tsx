import styled from "styled-components";
import {motion} from "framer-motion";
import {breakpoint, heightFooter, heightNavbar} from "../../../styles/variables";

export const ContainerAbout = styled(motion.section)`
  position: absolute;
  width: 100%;
  height: calc(100% - ${heightNavbar});
  left: 0;
  bottom: 0;
  padding: calc(1% + .2rem);

  .container {
    max-width: ${breakpoint.lg};
    width: 100%;
    height: auto;
    padding: calc(1% + .2rem);
    padding-bottom: calc(${heightFooter} + 1rem);
    margin: 0 auto;
  }

  .row-info {
    margin-top: -25%;
  }

  .container-services {
    backdrop-filter: blur(2px);
    transform: translate3d(0, 0, 0);
    padding: calc(1% + .2rem);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    min-height: 30rem;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
    border-radius: 10px;

    .list-services {

    }
  }

  .container-info {
    position: relative;
    max-width: 100%;
    width: 57rem;
    margin-left: auto;
    z-index: 3;
    backdrop-filter: blur(2px);
    transform: translate3d(0, 0, 0);
    padding: calc(1% + .2rem);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    min-height: 30rem;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
    border-radius: 10px;

    .info-biography {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        opacity: 0.2;
        bottom: -.5rem;;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #fff;
        height: 1px;
        width: calc(100% - 30px);

      }
    }
  }
`