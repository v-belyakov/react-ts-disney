import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/shared/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    {/**
      CssBaseline kickstart an elegant, consistent,
      and simple baseline to build upon.
      */}
    <CssBaseline />
    <App />
  </ThemeProvider>
);
