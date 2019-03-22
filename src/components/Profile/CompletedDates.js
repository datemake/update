import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//css
import "./Profile.css"

const styles = {
    card: {
      width: 1200,
      height: 275,
      marginTop: 45,
      marginBottom: 65
    },
  
    title: {
      fontSize: 12
    },

  };
  
function CompletedDates(props) {
    const { classes } = props;
    
    function SavedDates(props) {
      const { classes } = props;
      const [savedDates,setSavedDates] = useState([])
  
      useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            '/api/completedDates',
          );
          console.log(result.data)
          setSavedDates(result.data);
        };
    
        fetchData();
      }, []);

       const completed = savedDates.map(date => {
         return <div key={date.id}>
                    <h2>{date.username}</h2>
                    <h2>{date.profile_pic}</h2>
                    <h2>{date.username}</h2>
                 </div>
       })
return(


      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="profile-user-card">
          <CardContent className="profile-user-card-content">
              {completed}
          </CardContent>
        </div>
      </Card>
    
  
)
}
}
CompletedDates.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(CompletedDates);