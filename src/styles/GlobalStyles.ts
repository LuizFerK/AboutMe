import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Montserrat" ,sans-serif;
  }
  :root {
    --black: #141D26;
    --white: #FFFFFF;
    --primary: #710F67;
    --secundary: #421646;
  }
`;
