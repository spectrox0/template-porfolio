import styled from "styled-components";


export const ContainerBox = styled.div`
  backdrop-filter: blur(2px);
  transform: translate3d(0, 0, 0);
  padding: calc(2% + .2rem);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  border-radius: 10px;
`