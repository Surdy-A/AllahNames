import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, withStyles, Grid } from "@material-ui/core";
import NameCard from "../components/NameCard";

const styles = (theme) => ({
  nameContainer: {
    height: "100vh",
    backgroundColor: "rgb(68, 68, 68)",
    paddingTop: 80,
    textAlign: "center"
  },
});

export class Favourites extends Component {
  render() {
    const { classes, favourites } = this.props;
    return (
      <Box>
        <Grid container spacing={2} className={classes.nameContainer}>
          {favourites.map((nameDt) => {
            return (
              <NameCard
                namesProp={nameDt}
                key={nameDt.id}
                image={nameDt.image}
              />
            );
          })}
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Favourites)
);
