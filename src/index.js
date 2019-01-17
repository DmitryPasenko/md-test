import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import App from './containers/App/index.js'
import 'sanitize.css/sanitize.css'
import './index.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const initialState = {};
const store = configureStore(initialState);

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#7cd57c',
            main: '#4aa34e',
            dark: '#0d7322',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffffff',
            main: '#eeeeee',
            dark: '#bcbcbc',
            contrastText: '#000',
        },
    },
});

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
 , target);