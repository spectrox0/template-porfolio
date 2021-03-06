import styled from "styled-components";
import {breakpoint, heightNavbar} from '@/styles/variables'

interface Props {
    isOpen?: boolean
}

export const ContainerNavbar = styled.nav<Props>`
  width: 100%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5) 0, transparent);
  position: fixed;
  height: ${heightNavbar};
  z-index: 10;
  padding: 0.75rem 4%;
  display: flex;
  align-items: center;

  .navbar-inner {
    width: 100%;
    max-width: ${breakpoint.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .navigation-menu {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`