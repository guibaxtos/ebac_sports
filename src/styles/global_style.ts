import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    }

    .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    }
`;

export default GlobalStyle;