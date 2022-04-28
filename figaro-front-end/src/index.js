import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components"
import { Provider } from 'react-redux';
import store from './Redux/store';
import { getTotals } from './Redux/cartRedux';


const theme = {
  primary: {
    main: "#1a1517",
    light: "#403b3d",
    dark: "#000000"
  },
  secondary: {
    main: "#cbc694",
    light: "#fff9c5",
    dark: "#9a9666"
  },
  textCol: {
    textOnPrim: "#ffffff",
    textOnSec: "#000000"
  }

}

store.dispatch(getTotals());


ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
</React.StrictMode>,
  document.getElementById('root')
);


