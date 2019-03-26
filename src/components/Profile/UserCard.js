import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"

//css
import "./Profile.css"

const styles = {
    card: {
      width: 1200,
      height: 275,
      marginTop: 75,
    //   marginBottom: 65
    },
  
    title: {
      fontSize: 12
    },
      bigAvatar: {
        margin: 10,
        width: 170,
        height: 170
      }

  };
  
function UserCard(props) {
    const { classes } = props;
    console.log(props)
  return(
    <Card className={classes.card} style={{ backgroundColor: "#white" }}>
      <div className="profile-user-card">
        <CardContent className="profile-user-card-content">
        <div className= "profile-user-avatar">
        <Avatar alt="Profile Picture" src={props.profile.profile_pic ? props.profile.profile_pic : require('../../photos/user.png')} className={classes.bigAvatar} />
        
        </div>
        <div className="profile-user-card-text">
        <Typography
            variant="h3"
            color= 'primary'
            style={{ fontWeight: 600 }}
          >
            {props.profile.username}
            
          </Typography>
          <div className="profile-user-card-text-inner">
          <Typography
            variant="h4"
            
            style={{ fontWeight: 600 }}
          >
          <div className="dates-completed">
            Dates Completed 
            <div className="dates-completed-num" style={{fontFamily: 'Lobster', color:'#EF4E4E', fontSize: 50}}>12</div></div>
            <br/>
            <div className="dates-completed">
            Dates Created 
            <div className="dates-completed-num" style={{fontFamily: 'Lobster', color:'#EF4E4E', fontSize: 50}}>12</div></div>
          
          </Typography>
          </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
UserCard.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(UserCard);