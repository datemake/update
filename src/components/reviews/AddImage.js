import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input'

import firebase from 'firebase/app';

const styles = {
    card: {
      width: '40vw',
      // marginBottom: "150px",
      // marginTop: "150px",
      display: "flex",
  
      justifyContent: 'center'
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      // fontSize: 14,
    },
    pos: {
      marginBottom: 12
    },
    textField: {
        width: 700
    }
  }

function AddImage(props){
    const { classes } = props;
    const {setExif, setUrl} = props

    const [file, setFile] = useState('')

    return(
        <div>
            <Input 
                accept="image/*" 
                className={classes.input} 
                id="raised-button-file" 
                multiple 
                type="file" 
                style={{display: 'none'}}
              /> 
              <label htmlFor="raised-button-file"> 
                <Button component="span" className={classes.button}> 
                  Add Image 
                </Button> 
              </label> 
        </div>

    )
}

AddImage.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(styles)(AddImage)