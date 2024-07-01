import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Product from "./Product";
import { products } from "../data";

const Project = () => {
  const useStyles = makeStyles((theme) => ({
    page: {
      height: "100%",
      width: "100%",
      backgroundColor: "#1F2833",
      padding: "50px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.between("xs", "md")]: {
        padding: "20px 10px",
      },
    },
    text: {
      height: "100%",
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
      maxWidth: "800px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Box className={classes.page} id="portfolio">
        <Box className={classes.text}>
          <Typography
            fontFamily="Overpass"
            sx={{ fontWeight: "500" }}
            variant="h3"
          >
            Portfolio and On-going Projects
          </Typography>
          <Typography
            variant="body1"
            fontFamily="Gelasio"
            style={{ margin: "20px 0px", textAlign: "justify" }}
          >
            Check out some of my projects by using different technologies and
            languages.
          </Typography>
        </Box>
        <Box className={classes.list}>
          {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              title={item.title}
              link={item.link}
              skills={item.skills}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Project;
