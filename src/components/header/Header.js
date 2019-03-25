import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth'
import '../../firebase'
import './firebaseui-styling.global.css'

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button'
import AddBox from '@material-ui/icons/AddBox'
import Person from '@material-ui/icons/Person'

import './header.css'

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      },
      CredentialHelper: 'none'
  }

function Header(props) {

    const [open, setOpen] = useState(false);
    const [signedIn, setSignedIn] = useState(false)
    const [user, setUser] = useState('')
    
    useEffect(() => {
        checkUser()
    }, [user])

    function openDialog(){
        setOpen(true)
    }

    function checkUser(){
        firebase.auth().onAuthStateChanged(function(user) {
            console.log(user)
            if (user) {
                const info = {
                    displayName: user.displayName,
                    email: user.email,
                    firebaseId: user.uid,
                    profileImg: user.photoURL
                }
                axios.post('/api/profile', info)
              setSignedIn(true)
              setOpen(false)
            //   setUser(user.displayName)
            } else {
              setSignedIn(false)
            }
          })
    }

    function logout(){
        firebase.auth().signOut().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }

    return(
        <div>
            {/* {console.log(props)} */}
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
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </Dialog>
                {signedIn === true
                        ?
                            <div id='loginSignup'>
                                <Button style={{color: 'white'}} onClick={() => logout()}>Logout</Button>
                                <Link to='/profile' style={{textDecoration: 'none', display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <Person color='primary' fontSize='large'/>
                                    <Typography variant='h6' style={{color: 'white', fontWeight: '900', textDecoration: 'none'}}>Profile</Typography>
                                </Link>
                            </div>
                            
                        :
                            <div id='loginSignup'>
                                <Button style={{color: 'white'}} onClick={() => logout()}>Logout</Button>
                                <Typography variant='h4' style={{color: 'white', borderRight: '2px solid white', paddingRight: '10px', cursor: 'pointer'}} onClick={() => setOpen(true)}>Login</Typography>
                                <Typography variant='h4' style={{color: "#EF4E4E", fontFamily: 'Lobster', fontSize: '200%', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer'}} onClick={() => setOpen(true)}>Signup</Typography>
                            </div>
                    }
            </AppBar>
        </div>
    )
} 

    


    
    


export default withRouter(Header);
