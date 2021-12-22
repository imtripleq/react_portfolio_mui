import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Project = () => {
  const useStyles = makeStyles({
    page: {
      height: "100vh",
      backgroundColor: "white",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.page}>
        <Box component="div" className={classes.text}>
          <Typography variant="h1">Hello World</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Project;
