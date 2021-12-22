import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ReactTyped from "react-typed";

// CSS Styles
const useStyles = makeStyles({
  avatar: { border: "2px solid #1A1A1D", marginBottom: "20px" },
  frontPage: {
    height: "100vh",
  },
  title: {
    fontSize: "4rem",
    color: "white",
  },
  subtitle: {
    color: "#66FCF1",
  },
  typeContainer: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    // justifyContent: "center",
    textAlign: "center",
    zIndex: 1,
  },
  firstSubtitle: {
    color: "#66FCF1",
    fontSize: "2rem",
  },
});

const Header = () => {
  const TypeContainer = () => {
    return (
      <Box className={classes.typeContainer}>
        <h4 className={classes.firstSubtitle}> H e l l o W o r l d.</h4>
        <h1 className={classes.title}>I'm Dennis Khor.</h1>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <ReactTyped
            strings={["A FrontEnd Developer.", "Software Engineer."]}
            typeSpeed={70}
            backSpeed={50}
            loop
          ></ReactTyped>
        </Typography>
      </Box>
    );
  };
  const classes = useStyles();
  return (
    <Box component="div" className={classes.frontPage}>
      <TypeContainer />
    </Box>
  );
};

export default Header;
