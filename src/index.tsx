import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles, ThemeProvider } from './theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
