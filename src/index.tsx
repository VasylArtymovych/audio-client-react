import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from 'components/App';
import { ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';
import { setupStore } from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <App />
          <ToastContainer />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
