import {
  Avatar,
  Box,
  CircularProgress,
  circularProgressClasses,
  createTheme,
  Typography,
} from "@mui/material";
import { makeStyles, styled, ThemeProvider } from "@mui/styles";
import React from "react";
import avatar from "../img/avatar.jpg";

const Aboutme = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const useStyles = makeStyles({
    page: {
      height: "100vh",
      width: "100vw",
      display: "block",
      backgroundColor: "#1F2833",
      alignItems: "center",
    },
    top: {
      display: "flex",
      height: "35vh",
      width: "800px",
      margin: "auto",
      alignItems: "center",
      backgroundColor: "#1F2833",
      color: "#C5C6C7",
    },
    left: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      margin: "20px 0px",
    },
    about: { margin: "10px 0px", marginTop: "20px" },
    right: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    paragraph: {
      margin: "10px 0px",
      width: "600px",
      display: "flex",
      textAlign: "justify",
    },
    bottom: {
      height: "65vh",
      width: "50vw",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px",
      margin: "auto",
    },
    progress: {},
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box component="div" className={classes.page}>
        <Box component="div" className={classes.top}>
          <Box component="div" className={classes.left}>
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt="Dennis Khor"
              sx={{ width: 150, height: 150, boxShadow: 15 }}
            />
          </Box>
          <Box component="div" className={classes.right}>
            <Box component="div" className={classes.about}>
              <Typography variant="h2">About Me</Typography>
            </Box>
            <Box component="div" className={classes.paragraph}>
              <Typography paragraph variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste
                reiciendis quibusdam repellendus quod consectetur maxime sint
                earum natus itaque libero nulla, nisi eveniet impedit vero.
                Autem facilis explicabo tempora, amet beatae commodi neque
                assumenda veritatis illum non sequi dolorum?
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component="div" className={classes.bottom}>
          <Box component="div" className={classes.progress}>
            <CircularProgress
              variant="determinate"
              value={90}
              thickness={4.2}
              size={200}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Aboutme;
