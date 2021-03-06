import styled from "styled-components";


export const ContainerBox = styled.div`
  transform: translate3d(0, 0, 0);
  padding: calc(2% + .2rem);
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  overflow: hidden;
  width:100%;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  position: relative;
  &.box-carousel {
    min-height: calc(15vw + 20rem);
    max-height: 40rem;
  }
`