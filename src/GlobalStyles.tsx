import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;

export default GlobalStyles;
