import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { NAME_API_URL } from "../config";
import NameCard from "../components/NameCard";

const useStyles = makeStyles((theme) => ({
  nameContainer: {
    textAlign: "center",
    padding: "70px 10px 0px 10px",
    backgroundColor: 'rgb(68, 68, 68)'
  },
}));

export default function NameList() {
  const classes = useStyles();
  const [nameData, setNameData] = useState(null);
  useEffect(() => {
    axios.get(NAME_API_URL).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const  results  = response.data;
        let newNameData = [];
        results.forEach((nameDt, index) => {
          index++;
          let nameDtObject = {
            id: index,
            name: nameDt.name,
            image: nameDt.image,
            meaning: nameDt.meaning,

          };
          newNameData.push(nameDtObject);
        });
        setNameData(newNameData);
      }
    });
  }, []);
  return (
    <Box>
      {nameData ? (
        <Grid className={classes.nameContainer} container spacing={2}>
          {nameData.map((nameDt) => {
            return (
              <NameCard
                namesProp={nameDt}
                image={nameDt.image}
                key={nameDt.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
