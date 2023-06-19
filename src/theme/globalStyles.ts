import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,
    body,
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: #e2d5de;
        font-family: Roboto, 'Courier New', Courier, monospace;
    }
`;
