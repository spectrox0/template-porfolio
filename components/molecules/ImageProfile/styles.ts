import styled, {keyframes} from "styled-components";


interface Props {
    load?: boolean
}
export const ContainerImageProfile = styled.div<Props>`
  border-radius: 50%;
  position: relative;
  display: ${({load}) => load? 'inline-flex' : 'none'};
  width:100%;
  img {
    border-radius: 50%;
    width:100%;
    opacity: 0.8;
    max-width: 100%;
    filter: grayscale(0.2);
  }

  &:after, &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%,0);
    box-shadow: 0 0 3px inset rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:after {
    border-bottom: solid 2px rgba(255, 255, 255, 0.5);
    border-right: solid 2px rgba(255, 255, 255, 0.5);
  }

  &:before {
    width: calc(100% + .5rem);
    height: calc(100% + .5rem);
    border-top: solid 1px rgba(255, 255, 255, 0.5);
    border-left: solid 1px rgba(255, 255, 255, 0.5);
  }

  &:hover {
    img {
      filter: none;
    }
  }
`