import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90, 90 ,90)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
      textDecoration: "none"
  }
}));

export default function NameCard(props) {
  const classes = useStyles();
  const { namesProp } = props;
  const { id, name, image } = namesProp;
  return (
    <Grid item xs={12} sm={2} key={id}>
      <Link to={"/name/" + id} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>{id}. {name}</Typography>
            <Typography>{namesProp.meaning}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
