import React, { useState,useEffect } from "react";
import axios from "axios"
//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Restaurant, LocalActivity, PhotoCamera} from '@material-ui/icons'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//css
import "./date.css";
import firebase from 'firebase/app';


const styles = {
  card: {
    // minWidth: 375,
    width: '45vw',
    // maxHeight: '80vh'


  },
  pos: {
    marginBottom: 12,
  },
};


function DateDescription(props) {
  const { classes,date_id,user_id } = props;
  const [check,setCheck] = useState(false)
  
  const handleChange = name => event => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        axios.post('/api/savedADate', {date_id:props.date.date_id,firebase_id:user.uid}).then(response => {
      
        })
      }
    })
    setCheck(true);
    console.log(props)
   
  };
  console.log(props.date)
  return (
    <div className='date_cards'>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h2' gutterBottom style={{textDecoration: 'underline', textAlign: 'center'}}>
            {props.date.date_name}
          </Typography>
      
          <div className='short_description_div'>
            <LocalActivity color='primary' style={{marginRight: '15px'}}/>
            <Typography variant="h4" >Activity-</Typography>
            <Typography variant='h5' style={{width: '100%', marginTop: '5px', fontWeight: '400'}}>{props.date.activity_description}</Typography>

            <FormControlLabel
              control={
                <Checkbox checked={check} onChange={handleChange('checkedA')} value="checkedA" />
              }
              label="Save Date"
            />
          </div>
          <div className='short_description_div'>
            <Restaurant color='primary' style={{marginRight: '15px'}}/>
            <Typography variant="h4" >Food-</Typography>
            <Typography variant='h5' style={{width: '100%', marginTop: '5px', fontWeight: '400'}}>{props.date.food_description}</Typography>
          </div>
          <div className='short_description_div'>
            <PhotoCamera color='primary' style={{marginRight: '15px'}}/>
            <Typography variant="h4" >Memory-</Typography>
            <Typography variant='h5' style={{width: '100%', marginTop: '5px', fontWeight: '400'}}>{props.date.memory_description}</Typography>
          </div>
       
        </CardContent>
      </Card>
      <Card className={classes.card} style={{marginTop: '25px'}}>
        <CardContent>
          <Typography variant='h5' gutterBottom style={{ textAlign: 'left', fontWeight: '400'}}>
            {props.date.date_description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
DateDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateDescription);
