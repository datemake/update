import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox'
import {Link} from 'react-router-dom'

import './header.css'

const testTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#EF4E4E',
            contrastText: '#fff'
        }
    },
    typography: {
        useNextVariants: true,
    }
    
})

const Header = () => {

    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] =  useState(false)

    return(
        <div>
        <AppBar position='fixed' style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none', paddingTop: '10px'}} id='appBar'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Typography variant='h4' style={{color: 'white'}}>up<span style={{color: "#EF4E4E"}}>date</span></Typography>
            </Link>
            <Link to='/create-date/' style={{textDecoration: 'none'}}>
                <div id='create_date'>
                    {/* <Typography variant='h5' style={{color: 'white'}}>Create</Typography> */}
                    <AddBox color='primary' fontSize='large'/>
                    <Typography variant='h6' style={{color: 'white', fontWeight: '900', textDecoration: 'none'}}>Create Date</Typography>
                </div>
            </Link>
            <Dialog
            open={loginOpen}
            onClose={() => setLoginOpen(false)}
            >
                <MuiThemeProvider theme={testTheme}>
                    <TextField
                        id="outlined-name"
                        label="username"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        style={{marginLeft: '100px', marginRight: '100px', marginTop: '50px'}}
                        
                    />
                    <TextField
                        id="outlined-name"
                        label="password"
                        type='password'

                        margin="normal"
                        variant="outlined"
                        style={{marginLeft: '100px', marginRight: '100px'}}
                    />
                </MuiThemeProvider>
                <div className='button_div'>
                    <Button onClick={() => setLoginOpen(false)} color="primary" style={{fontWeight: '900'}}>
                    Cancel
                    </Button>
                    <Button variant='contained' onClick={() => setLoginOpen(false)} color="primary" style={{fontWeight: '900'}}>
                    Login
                    </Button>
                </div>
            </Dialog>
            <Dialog
            open={signupOpen}
            onClose={() => setSignupOpen(false)}
            >
                <MuiThemeProvider theme={testTheme}>
                    <TextField
                        id="outlined-name"
                        label="username"
                        // className={classes.textField}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        style={{marginLeft: '100px', marginRight: '100px', marginTop: '50px'}}
                        
                    />
                    <TextField
                        id="outlined-name"
                        label="password"
                        type='password'

                        margin="normal"
                        variant="outlined"
                        style={{marginLeft: '100px', marginRight: '100px'}}
                    />
                </MuiThemeProvider>
                <div className='button_div'>
                    <Button onClick={() => setSignupOpen(false)} color="primary">
                    Cancel
                    </Button>
                    <Button variant='contained' onClick={() => setSignupOpen(false)} color="primary">
                    Login
                    </Button>
                </div>
            </Dialog>
            <div id='loginSignup'>
                <Typography variant='h4' style={{color: 'white', borderRight: '2px solid white', paddingRight: '10px', cursor: 'pointer'}} onClick={() => setLoginOpen(true)}>Login</Typography>
                <Typography variant='h4' style={{color: "#EF4E4E", fontFamily: 'Lobster', fontSize: '200%', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer'}} onClick={() => setSignupOpen(true)}>Signup</Typography>
            </div>
        </AppBar>

    </div>
    )
} 

    


    
    


export default Header;
