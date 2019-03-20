import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#EF4E4E',
            main: '#EF4E4E',
            dark: '#EF4E4E',
            contrastText: 'rgb(0,0,0)'
        }
    },
    typography: {
        useNextVariants: true,
        button: {
            fontFamily: 'Vollkorn',
            
        },
       
        
        h2: {
            fontFamily: ['Lobster']
        },
        h3: {
            fontFamily: ['Lobster']
        },
        h4: {
            fontFamily: ['Vollkorn', 'serif'],
            color: '#000000',
            fontWeight: "900",
            textTransform: "none"
        },
        h5: {
            fontFamily: ['Vollkorn', 'serif'],
            color: '#000000',
            fontWeight: "900",
            textTransform: "none"
        },
        h6: {
            fontFamily: ['Vollkorn', 'serif']
        }
    }
})

ReactDOM.render(

    <Router>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
