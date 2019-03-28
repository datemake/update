import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {inputDateDescription, inputDateName} from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Restaurant, LocalActivity, PhotoCamera } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import Textfield from "@material-ui/core/TextField";

import TextField from "@material-ui/core/TextField";

//css
import "../date/date.css";

const styles = {
  dialogue: {
    display: "flex",
    flexDirection: "column",
    
  },
  textfield: { marginBottom: 10, minWidth: 200 },

  card: {
    // minWidth: 375,
    width: 900,
   
    padding:5
    
    // maxHeight: '80vh'
  },
  pos: {
    marginBottom: 10
  }
};

function FormReviewDescription(props) {
  
  const [boxTwo, setBoxTwo] = useState(false);

  const { classes } = props;


  return (
    <div className="form-review-description-card">
{props.dateName && props.specificActivity.result.name && props.specificFood.result.name && props.specificMemory.result.name &&
      <Card className={classes.card}>
        <CardContent >
          <Typography
            variant="h4"
            gutterBottom
            style={{  textAlign: "center" }}
          >
            Date name: {props.dateName}
          </Typography>
        
          <div className="review-short_description_div">
            <LocalActivity color="primary" style={{ marginRight: "15px" }} />
            <Typography variant="h5">Activity-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
            
              {props.specificActivity.result.name}
            </Typography>
          </div>
          <div className="review-short_description_div">
            <Restaurant color="primary" style={{ marginRight: "15px" }} />
            <Typography variant="h5">Food-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
              
              {props.specificFood.result.name}
            </Typography>
          </div>
          <div className="review-short_description_div">
            <PhotoCamera color="primary" style={{ marginRight: "15px" }} />
            
            <Typography variant="h5">Memory-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
              
              {props.specificMemory.result.name}
        
              </Typography>
              
            
              {/* //Modal to date description: */}
              <Dialog open={boxTwo} onClose={() => setBoxTwo(false)}>
                <div className="box-two">

       <Textfield
                    id="outlined-bare"
                    className={classes.textField}
                  
                    placeholder={props.dateName}
                
                    margin="normal"
                    variant="outlined"
                    onChange={e => props.inputDateName(e.target.value)}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Write your description"
                    multiline
                    rowsMax="15"
                    placeholder={props.inputDescription}
                    value={props.inputDescription}
                    onChange={e => props.inputDateDescription(e.target.value)}
                    className={classes.textField}
                    margin="normal"
                    style={{ backgroundColor: "white" }}
                    variant="filled"
                  ></TextField>


                  
                </div>

                
              </Dialog>
              {/* //Modal to edit name, activity, food, memory description: */}
              {/*  */} 
   
          </div>
 
          <div className="description-div">
          <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left", fontWeight: "400" }}
              >
                {props.inputDescription}
              </Typography>
              <div className="first-review-submit-button">
              <Button
                onClick={() => setBoxTwo(true)}
                size="small"
                variant="outlined"
                color="primary"
                style={{ color: "primary", fontWeight: 600, fontSize: 16 }}
              >
                Edit
              </Button></div>
              </div>
        </CardContent>
      </Card>
}
    </div>
  )
}


const mapStateToProps = state => state;

FormReviewDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(mapStateToProps, {inputDateDescription, inputDateName})(FormReviewDescription)
);
