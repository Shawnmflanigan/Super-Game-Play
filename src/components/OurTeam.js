import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

import Link from "react-router-dom";

import team from "./Team"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function OurTeam() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Our Team
      </Typography>
      <CardContent>
        {team.map((team) => (
          <Card className={classes.root} variant="outlined" key={team.id}>
            {team.name}
            <Avatar className={classes.large} alt={team.name} src={team.avatar}/>
            {team.role}
            <CardActions>
              <Button size="small" href={team.link}>We can put links here</Button>
            </CardActions>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}


export default OurTeam;
