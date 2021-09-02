import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #000000;
    --color-secondary: #ffffff;
    --color-accent: #ff3366;
    --color-text: #777777;
    --color-border: #eeeeee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  body {
    background: var(---color-secondary);
  }

  *,
  input,
  button {
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
