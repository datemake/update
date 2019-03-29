import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input'

import firebase from 'firebase/app';
import '../../firebase.js'


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
    const {images, setImages, setLoading, loading} = props

    const [file, setFile] = useState('')
    const [exif, setExif] = useState('')

    useEffect(() => {
      if(file){
        setLoading(true)
      }
    }, [file])

    useEffect(() => {
      if(loading){
        handleFileUpload()
      }
    }, [loading])

    function handleFileChange(file){
      setFile(file)
      // console.log(file)
    }

    function handleFileUpload(){
      // console.log(file)
      getOrientation(file, function(orientation) {
        setExif(orientation)
     });
     if(file){
      const storageRef = firebase.storage().ref()
      const imageFolderRef = storageRef.child('review_images/'+file.name)
      // const imageRef = storageRef.child(file.name)
      const pic = file
      const metadata = {
          name: file.name,
      }
      imageFolderRef.put(pic, metadata).then(function(snapshot){
          // console.log(snapshot)
          imageFolderRef.getDownloadURL().then(url => {
              setImages([...images, {url: url, exif: exif}])
          })
      }, () => console.log(), setLoading(false), setFile(''))
  }
  else {
      alert('Please select a image')
  }
    }

    function getOrientation(file, callback) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var view = new DataView(event.target.result);
        if (view.getUint16(0, false) !== 0xFFD8) return callback(-2);
        var length = view.byteLength,
            offset = 2;
        while (offset < length) {
          var marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
              return callback(-1);
            }
            var little = view.getUint16(offset += 6, false) === 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
    
            for (var i = 0; i < tags; i++)
              if (view.getUint16(offset + (i * 12), little) === 0x0112)
                return callback(view.getUint16(offset + (i * 12) + 8, little));
          }
          else if ((marker & 0xFF00) !== 0xFF00) break;
          else offset += view.getUint16(offset, false);
        }
        return callback(-1);
      };
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }

    // console.log(images)
    return(
        <div>
            <Input 
                accept="image/*" 
                className={classes.input} 
                id="raised-button-file" 
                multiple 
                type="file" 
                style={{display: 'none'}}
                onChange={(e) => handleFileChange(e.target.files[0])}
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