import React , {useState,useEffect} from "react";
import "./Profile.css";
import axios from "axios"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import firebase from 'firebase/app';


//components
import UserCard from "./UserCard"
import SavedDates from "./SavedDates"
import CompletedDates from "./CompletedDates"

const styles = {
  card: {
    minWidth: 275,
    // marginBottom: "150px",
    // marginTop: "150px",
    display: "flex"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  main: {
    width: "50%",
    margin: " 0 auto",
    display: "flex",
    justifyContent: "space-between"
  }
};
function Profile(props) {
  const { classes } = props;
  const [profile,setProfile] = useState([])
  
  function fetchData(id){
    axios
      .get(`/api/get/profile/${id}`)
      .then(response =>{ 
        console.log(response.data)
        setProfile(response.data)
      });
  }
  useEffect(() => {
    checkUser()
  }, [])
  
  function checkUser(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        fetchData(user.uid)
        console.log(user)
      }
      else{
        props.history.push('/')
      }
    })
  }

  function fetchData(id){
    axios
      .get(`/api/get/profile/${id}`)
      .then(response =>{ 
        console.log(response.data)
        setProfile(response.data[0])
      });
  }

  return (
    <div className="profile-component">
      <UserCard profile={profile}/>
      <SavedDates profile={profile}/>
      <CompletedDates profile={profile}/>
    </div>
  );
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);