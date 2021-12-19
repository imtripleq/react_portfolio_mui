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
    color: "#950740",
  },
  subtitle: {
    color: "white",
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
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typeContainer}>
      <Grid container justifyContent="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Dennis Khor"
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
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
