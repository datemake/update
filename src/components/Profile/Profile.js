import React , {useState,useEffect} from "react";
import "./Profile.css";
import axios from "axios"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/profile',
      );
      console.log(result.data)
      setProfile(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="profile-component">
    <UserCard/>
    <SavedDates/>
    <CompletedDates/>
     {/* <Card className={classes.card}>
      <CardContent className={classes.main}>
        <div className="main2">
          <img src="https://cdn.inquisitr.com/wp-content/uploads/2019/03/selena-gomez-4.jpg" />
        </div>
        <div className="user_info">
        <Typography className={classes.title} variant="h2"  color="textSecondary" gutterBottom>
          Completed Dates: <span className="numbers">12</span>
        </Typography>
        <Typography className={classes.title} variant="h2"  color="textSecondary" gutterBottom>
          Saved Dates: <span className="numbers">5</span>
        </Typography>
        </div>
      </CardContent>
    </Card> */}
          
  
    </div>
  );
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);

/* <div className="contaier">
  <div className="profile">
    <div className="user">
      <div className="profile_picture">
        <img src="" alt="" />
      </div>
      <div className="user_info">
        <h4>Martha</h4>
        <h5>member since 2018</h5>
      </div>
    </div>
    <div className="date_summary">
      <h2>Dates Complete: 12</h2>
      <h2>Dates Created: 6</h2>
    </div>
  </div>

  <div className="saved_dates">
      <div className="saved_date_pic">
        <img src="" alt="" />
      </div>
      <div className="saved_date_info">
        <h2>Carnival Party</h2>
        <div>
          <img src="" alt="" />
          <h5>Marky_34</h5>
      </div>
    </div>
      <div className="saved_date_hearts" />
  </div>

  <div className="completed_dates">
      <h1>Completed Dates</h1>
    <div className="completed">
      <div className="completed_date_pic">
        <img src="" alt="" />
      </div>
      <div className="completed_date_info">
        <h2>Neon Evening</h2>
        <p className="date_paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corporis, repudiandae voluptatem soluta ipsam ad ducimus obcaecati
          magni molestias eum, provident facere quaerat ullam. A deserunt
          harum quisquam, totam molestias est.
        </p>
      </div>
      <div className="saved_date_hearts" />
    </div>
  </div>
</div> */