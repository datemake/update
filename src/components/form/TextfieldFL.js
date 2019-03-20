import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
 
  });


class TextfieldFL extends React.Component {

    render() {
        const { classes } = this.props;
return(
    <div>

         <form className={classes.container} noValidate autoComplete="off">
   

   <TextField
     id="outlined-bare"
     className={classes.textField}
   //   defaultValue="string"
   placeholder={this.props.placeholder}
     margin="normal"
     variant="outlined"
     style={{width: 700, height: 30}}
   />
 </form>
    </div>
)
    }}


    TextfieldFL.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
      export default withStyles(styles)(TextfieldFL);