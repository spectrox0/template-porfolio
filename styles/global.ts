import {createGlobalStyle} from 'styled-components';
import {fontFamily, paletteColorsDark, primaryFontFamily} from "./variables";

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-weight: 300;
    padding: 0;
    margin: 0;
    background-color: #141414;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent !important;
   // cursor: none !important;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: ${primaryFontFamily};
    min-height: 100%;
    &, * {
      box-sizing: border-box;
    }
    @media (max-width: 600px) {
      font-size: .75rem;
    }
    @media (max-width: 768px) {
      font-size: .8rem;
    }

    @media (max-width: 992px) {
      font-size: .9rem;
    }
  }
  

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  button,
  textarea,
  input,
  select,
  h2,
  div,
  h1,
  strong,
  b,
  h3,
  h4,
  span,
  p,
  img,
  a {
    
  }

  div {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
  .ps__rail-y {
    .ps__thumb-y {
      background-color: ${paletteColorsDark.primary};
    }
    &:hover > .ps__thumb-y,
    &:focus > .ps__thumb-y,
    &.ps--clicking .ps__thumb-y {
      background-color:${paletteColorsDark.primary};
      width: 6px;
    }
  }
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: transparent;
  }
`;