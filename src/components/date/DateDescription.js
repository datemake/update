import React, { useState,useEffect } from "react";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Restaurant, LocalActivity, PhotoCamera} from '@material-ui/icons'

//css
import "./date.css";

// const styles = {
//   card: {
//     width: 700,
//     height: 400,
//     // marginTop: 95,
//     // marginBottom: 65,
//     textAlign: "left",
//     paddingLeft: 50

//   },

//   title: {
//     fontSize: 12
//   },
//   avatar: {
//     margin: 10,
//     width: 60,
//     height: 60
//   }
// };
const styles = {
  card: {
    // minWidth: 375,
    width: 700


  },
  pos: {
    marginBottom: 12,
  },
};


function DateDescription(props) {
  const { classes } = props;
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
          <Typography variant='h5' gutterBottom style={{ textAlign: 'left'}}>
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
