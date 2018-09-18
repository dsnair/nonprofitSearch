import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Orgs = props =>
  props.orgs.map(org => (
    <div className={props.classes.root} key={org.ein}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={props.classes.heading}>{org.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component="p" color="textSecondary">
            Category: {org.category} <br />
            Cause: {org.cause} <br />
            Address: {org.street}, {org.city}, {org.state}, {org.zipcode} <br />
            Website: {org.website}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  ));

export default withStyles(styles)(Orgs);
