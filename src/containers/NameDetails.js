import React, { Component } from "react";
import axios from "axios";
import { NAME_API_URL } from "../config";
import {
  CircularProgress,
  Box,
  withStyles,
  Typography,
  Grid,
  Button,
  Paper
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { toggleFavourite } from "../redux/actions";

const styles = () => ({
  nameContainer: {
    textAlign: "center",
    padding: "40px 10px 5px 10px",
    backgroundColor: "rgb(68, 68, 68)",
    marginBottom: "0px",
  },
  nameImage: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  titleText: {
    padding: "8px",
    textAlign: "center",
  },
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

class NameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(NAME_API_URL + "/name/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({ nameData: response.data });
      }
    });
  }

  favouriteChecker(nameDt) {
   // let found = false
   var found = false
    this.props.favourites?.forEach(p => {
      if(p.id === nameDt.id) {
        found = true
      }
    });
    return found
  }


  render() {
    const { classes } = this.props;
    const { nameData } = this.state;
    if (nameData) {

      return (
        <Box>
          <Grid className={classes.nameContainer} container spacing={2}>
                  {nameData.map((nameDt) => {
                    return (
                      <>
                        <div className={classes.nameContainer}>
                          <Container spacing={4}>
                            <Item xs={12} sm={6} md={6}>
                              <Paper className={classes.paper}>
                                <img
                                  className={classes.nameImage}
                                  src={nameDt.image}
                                  alt="Allah-name"
                                />
                              </Paper>
                            </Item>
                            <Item xs={12} sm={6} md={6}>
                              <Paper className={classes.paper}>
                                <Typography variant="h3">
                                  {nameDt.name} ({nameDt.meaning}){" "}
                                </Typography>
                                <Typography className={classes.titleText}>
                                  {nameDt.usage}
                                </Typography>
                                <Button  onClick={() => this.props.toggleFavourite(nameDt)}>
                                  <FavoriteIcon
                                    style={{
                                      color: this.favouriteChecker(nameDt) ? "red" : "blue", fontSize: 50,
                                    }}
                                  />
                                </Button>
                              </Paper>
                            </Item>
                          </Container>
                        </div>
                      </>
                    );
                  })}
                </Grid>
            </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (nameData) => dispatch(toggleFavourite(nameData)),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(NameDetails)
);
