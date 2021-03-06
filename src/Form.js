import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: "capitalize"
  }
});

// {classes, onClick} = {props.classes, props.onClick}
const Form = ({ classes, onClick }) => (
  <form>
    <TextField
      label="City"
      defaultValue="Oakland"
      className={classes.textField}
      margin="normal"
      InputProps={{
        readOnly: true
      }}
    />
    <TextField
      label="State"
      defaultValue="CA"
      className={classes.textField}
      margin="normal"
      InputProps={{
        readOnly: true
      }}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={classes.button}
    >
      Search
    </Button>
  </form>
);

export default withStyles(styles)(Form);
