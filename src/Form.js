import React, { Component } from "react";
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
  },
});

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
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
        <Button variant="contained" color="primary" className={classes.button}>
          Search
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
