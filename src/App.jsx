import { createGlobalStyle } from 'styled-components';
import { backgroundImageJpg, backgroundImageWebp } from './assets/images';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,
  body {
    line-height: 1.2;
    font-size: 16px;
    width: 100%;
    height: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    background-image: url(${backgroundImageWebp}), url(${backgroundImageJpg}); 
    background-size: cover;
    background-position: bottom right;
  }

  /* font */
  @font-face {
    font-family: 'KoPubWorldDotum';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldDotumMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldDotumMedium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldDotumMedium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldDotumMedium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldDotumMedium.ttf') format("truetype");
    font-display: swap;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
