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
    background-image: url(${backgroundImageWebp}), url(${backgroundImageJpg});
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
