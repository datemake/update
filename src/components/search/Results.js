import React  from 'react';
import PropTypes from 'prop-types';
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

    return (
        <div id='results_div'>
            {props.dates.map((e, i) => {
                return (
                    <Card className='results_card'>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={e.activity_photo}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.date_name}
                            </Typography>
                            <Typography component="p">
                                {e.username}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </div>
    );
}

Results.propTypes = {
    classes: PropTypes.object.isRequired,
  }

export default withStyles(styles)(Results);