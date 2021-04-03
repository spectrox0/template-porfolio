import styled from "styled-components";
import {breakpoint, fontFamily} from "../../../styles/variables";
import {motion} from "framer-motion";


export const ContainerHomeTemplate = styled(motion.div)`
  position: relative;
  max-width: ${breakpoint.lg};
  width: 100%;
  margin: 0 auto;
  padding: 2rem 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .body-home {
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: ${fontFamily.Montserrat};
    text-align: center;
    padding: 1rem 1.3rem;
    width: 100%;

  }

}

h3 {
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-weight: 200;
  font-size: 1.5em;
  padding: .5rem 0;
  margin: 0;
  line-height: 1em;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
}
`
