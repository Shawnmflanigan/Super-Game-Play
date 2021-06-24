import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ImageAvatar from "../components/ImageAvatar";

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

const team = [
  { id: 1, name: "Revel", role: "AlphaCeo" },
  { id: 2, name: "Noah", role: "dev" },
  { id: 3, name: "River", role: "dev" },
  { id: 4, name: "Kipling", role: "dev" },
];

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
            <ImageAvatar />
            {team.role}
            <CardActions>
              <Button size="small">We can put links here</Button>
            </CardActions>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}


export default OurTeam;
