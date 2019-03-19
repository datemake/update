import React from "react";
import "./Profile.css"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
 function Profile(props) {
    const { classes } = props;
  return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
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
  );
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);
