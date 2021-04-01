import styled from "styled-components";


interface Props {
    load?: boolean
}

export const ContainerImageProfile = styled.div<Props>`
  border-radius: 50%;
  position: relative;
  width: 100%;
  z-index: -1;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    max-width: 100%;

    &:nth-child(1) {
      position: absolute;
    }

    &.image-blur {
      position: relative;
      z-index: 1;
      transform: translate3d(0,0,0);
      transition: opacity .5s ease-in-out;
      opacity: ${({load}) => +!load};
    }
  }


  &:after, &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
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

`