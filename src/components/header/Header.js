import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox'

import './header.css'

const testTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#7D26CD',
            contrastText: '#fff'
        }
    }
})

const Header = () => {

    const [open, setOpen] = useState(false);

    return(
        <div>
        <AppBar position='fixed' style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}} id='appBar'>
            <Typography variant='h4' style={{color: 'white'}}>up<span style={{color: "#EF4E4E"}}>date</span></Typography>
            <AddBox color='primary' fontSize='large'/>
            <Dialog
            open={open}
            onClose={() => setOpen(false)}
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
                        style={{marginLeft: '100px', marginRight: '100px', marginTop: '75px'}}
                        
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
                <Button onClick={() => setOpen(false)} color="primary">
                Cancel
                </Button>
                <Button onClick={() => setOpen(false)} color="primary">
                Login
                </Button>
            </Dialog>
            <div id='loginSignup'>
                <Typography variant='h4' style={{color: 'white', borderRight: '2px solid white', paddingRight: '10px', cursor: 'pointer'}} onClick={() => setOpen(true)}>Login</Typography>
                <Typography variant='h4' style={{color: "#EF4E4E", fontFamily: 'Yellowtail', fontSize: '200%', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer'}} onClick={() => setOpen(true)}>Signup</Typography>
            </div>
        </AppBar>

    </div>
    )
} 

    


    
    


export default Header;
