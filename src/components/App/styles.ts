import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, div#root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  & *::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  & *::-webkit-scrollbar-thumb {
    background-color: #dddddd;
  }

  @font-face {
    font-family: "Catallina";
    src: url("/assets/Catallina2.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: normal; 
  } 
  
  @media screen and (max-width: 480px) {
    & *::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }
`;

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  font-family: Raleway;
  font-style: normal;
  color: #000;
`;
