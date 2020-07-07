import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
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
  @media (min-width: 1500px) {
    html {
      font-size: 80%;
    }
  }
  @media (max-width: 1024px) {
    html {
      font-size: 40%;
    }
  }
  @media (max-width: 700px) {
    html {
      font-size: 30%;
    }
  }
`;
