import styled, {keyframes} from "styled-components";
import {breakpoint, fontFamily} from "../../../styles/variables";
import {motion} from "framer-motion";

const animation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`

export const ContainerHomeTemplate = styled(motion.div)`
  position: relative;
  max-width: ${breakpoint.lg};
  width: 100%;
  margin: 0 auto;
  padding: 2rem 4%;
  height: 100%;


  .title {
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: ${fontFamily.Montserrat};
    text-align: center;
    padding: 1rem 1.3rem;
    border-radius: 10px;
    width: 100%;
    
  }

  .title h1 {
    margin: 0;
    padding: 0.5rem 0;
    letter-spacing: 2px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
    font-size: 3em;
    background:  linear-gradient(45deg, #fff, rgba(255,255,255,0.1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.title h3 {
  bottom: 0;
  width: 100%;
  text-align: center;
  font-weight: 200;
  font-size: 1.5em;
  padding: .5rem 0;
  margin: 0;
  line-height: 1em;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 2px #fff;
  letter-spacing: 2px;
  background:  linear-gradient(45deg, #fff, rgba(255,255,255,0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.select-locale {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  right: 0;
  max-width: 20%;

  .container-img {
    position: relative;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    border-radius: 50%;

    &:after, &:before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      box-shadow: inset 0 0 3px #fff;
      height: 120%;
      opacity: 0.5;
      border-radius: 50%;
    }

    &:before {
      border-top: solid 1px #fff;
      width: 130%;
      height: 130%;
    }

    &:after {
      border-left: solid 1px #fff;;
    }

    img {

      opacity: 0.4;
      transition: opacity .5s ease-in-out;

      &.active {
        opacity: 1;
      }
    }


  }

`
