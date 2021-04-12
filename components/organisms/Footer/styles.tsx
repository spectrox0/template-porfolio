import styled from "styled-components";
import {breakpoint} from "../../../styles/variables";


export const ContainerFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 10;
  max-width: ${breakpoint.xl};
  width: 100%;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  transform: translateX(-50%);

  .select-locale {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    right: 0;
    max-width: 15%;

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