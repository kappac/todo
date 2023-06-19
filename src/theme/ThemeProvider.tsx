import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: {
            basic: '#3b71ca',
            on: '#fff',
            background: '#fff',
        },
    },
    border: {
        radius: '4px',
    },
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
    <SCThemeProvider theme={theme}>
        {children}
    </SCThemeProvider>
);
