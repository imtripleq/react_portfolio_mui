import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { spacing } from "@mui/system";
import React from "react";
import ReactTyped from "react-typed";
import avatar from "../img/avatar.jpg";

// CSS Styles
const useStyles = makeStyles({
  avatar: { border: "2px solid #1A1A1D", marginBottom: "20px" },
  title: {
    fontSize: "4rem",
    color: "white",
  },
  subtitle: {
    color: "#66FCF1",
  },
  typeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  firstSubtitle: {
    color: "#66FCF1",
    fontSize: "2rem",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typeContainer}>
      <h4 className={classes.firstSubtitle}>Hello World</h4>
      <h1 className={classes.title}>I'm Dennis Khor</h1>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <ReactTyped
          strings={["A FrontEnd Developer", "Software Engineer"]}
          typeSpeed={70}
          backSpeed={50}
          loop
        ></ReactTyped>
      </Typography>
    </Box>
  );
};

export default Header;
