import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Project = () => {
  const useStyles = makeStyles({
    page: {
      height: "100vh",
      backgroundColor: "white",
      padding: "50px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    text: { width: "65%" },
    list: { display: "flex" },
  });

  const Card = () => <div> card</div>;
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.page}>
        <Box component="div" className={classes.text}>
          <Typography variant="h1">Hello World</Typography>
          <Typography variant="h4" style={{ margin: "20px 0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatum veniam omnis quisquam assumenda corporis qui recusandae
            enim iusto necessitatibus!
          </Typography>
        </Box>
        <Box component="div" className={classes.list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Box>
    </>
  );
};

export default Project;
