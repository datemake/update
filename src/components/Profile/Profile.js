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
  console.log(props)

  const { classes } = props;
  const [profile,setProfile] = useState([])
  const [savedDates,setSavedDates] = useState([])
  const [completedDates,setCompletedDates] = useState([])

  console.log(profile)
  console.log(savedDates)
  useEffect(() => {
    checkUser()

  }, [])

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if(user){
  //       axios.get(`/api/savedDates/${user.uid}`).then(response => {
  //         console.log(response.data)
  //         setSavedDates(response.data)
  //       })
  //     }
  //   })
  // }, [])
  
  function checkUser(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        fetchData(user.uid)
        console.log(profile)
        getSavedDates(user.uid)
        getCompletedDates(user.uid)
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
      setProfile(response.data)
    });
  }
  function getSavedDates(id){
    axios
    .get(`/api/savedDates/${id}`)
    .then(response =>{ 
      console.log(response.data)
      setSavedDates(response.data)
    });
  }
  function getCompletedDates(id){
    axios
    .get(`/api/completedDates/${id}`)
    .then(response =>{ 
      console.log(response.data)
      setCompletedDates(response.data)
    });
  }
  

  return (
    <div className="profile-component">
      <UserCard profile={profile}/>
      <SavedDates savedDates={savedDates}/>
      <CompletedDates completedDates={completedDates}/>
    </div>
  );
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);