import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from 'react-redux'
import store from "./ducks/store"
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

it('renders without crashing', () => {
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
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    {console.log(store)}
    <Router>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Router>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
