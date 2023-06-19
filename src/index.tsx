import React from 'react';
import ReactDOM from 'react-dom/client';

import { TodoProvider } from './contexts';
import { GlobalStyles, ThemeProvider } from './theme';
import { App } from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <TodoProvider>
                <GlobalStyles />
                <App />
            </TodoProvider>
        </ThemeProvider>
    </React.StrictMode>
);
