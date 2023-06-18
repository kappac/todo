import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: #fff;
    }
`;
