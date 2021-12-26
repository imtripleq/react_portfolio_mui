import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ReactTyped from "react-typed";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: { border: "2px solid #1A1A1D", marginBottom: "20px" },
  frontPage: {
    height: "100vh",
    width: "100%",
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
    width: "95vw",
    // justifyContent: "center",
    textAlign: "center",
    zIndex: 1,
  },
  firstSubtitle: {
    color: "#66FCF1",
    fontFamily: "VT323!important",
  },
}));

const Header = () => {
  const TypeContainer = () => {
    return (
      <Box className={classes.typeContainer}>
        <Typography className={classes.firstSubtitle} variant="h3">
          Hello World.
        </Typography>

        <Typography
          fontFamily="Overpass"
          variant="h1"
          sx={{ color: "white", fontWeight: "500" }}
        >
          I'm Dennis Khor.
        </Typography>

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
