import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: {
            basic: '#3b71ca',
            on: '#fff',
        },
    },
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
    <SCThemeProvider theme={theme}>
        {children}
    </SCThemeProvider>
);
