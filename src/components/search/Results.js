import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import Rating from "react-rating";
import outlineHeart from "../../photos/outline-heart.png";
import fullHeart from "../../photos/full-heart.png";

import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import './results.css'

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }

function Results(props) {
    // const test = React.useContext(TestContext)
    console.log(props.dates)
    const { classes } = props;
    const sorted = props.dates.sort(function(a, b){
        return b.rating - a.rating
    })
    return (
        <div id='results_div'>
            {sorted.map((e, i) => {
                return (
                    <Link to={`/date/${e.date_id}`} key={i} style={{textDecoration: 'none'}}>
                         <Card className='results_card'>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={e.activity_photo}
                                title="Activity Photo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {e.date_name}
                                    </Typography>
                                    <div id='search_card_bottom'>
                                        <Typography component="p">
                                            {e.username}
                                        </Typography>
                                        <Rating
                                            initialRating={e.rating}
                                            readonly
                                            emptySymbol={
                                                <img
                                                src={outlineHeart}
                                                className="icon"
                                                style={{ height: 20 }}
                                                />
                                            }
                                            placeholderSymbol={
                                                <img
                                                src={fullHeart}
                                                className="icon"
                                                style={{ height: 20 }}
                                                />
                                            }
                                            fullSymbol={
                                                <img
                                                src={fullHeart}
                                                className="icon"
                                                style={{ height: 20, color: "red" }}
                                             />}
                                        />
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                )
            })}
        </div>
    );
}

Results.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  const mapStateToProps = state => {
    return {
      dates: state.searchResults
    };
  }

// export default withStyles(styles)(Results);

export default connect(mapStateToProps)(withStyles(styles)(Results))