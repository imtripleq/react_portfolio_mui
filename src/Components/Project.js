import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Product from "./Product";
import { products } from "../data";

const Project = () => {
  const useStyles = makeStyles({
    page: {
      height: "100%",
      width: "100%",
      backgroundColor: "#1F2833",
      padding: "50px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    text: {
      width: "85%",
      margin: "50px 0px",
      color: "#C5C6C7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.page}>
        <Box component="div" className={classes.text}>
          <Typography variant="h3">Portfolio and On-going Projects</Typography>
          <Typography
            variant="body1"
            style={{ margin: "20px 0px", textAlign: "justify" }}
          >
            Check out some of my projects by using different technologies and
            languages.
          </Typography>
        </Box>
        <Box component="div" className={classes.list}>
          {products.map((item) => (
            <Product key={item.id} img={item.img} title={item.title} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Project;
