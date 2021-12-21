import { Avatar, Box, createTheme, Typography } from "@mui/material";
import { makeStyles, ThemeProvider } from "@mui/styles";
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
      backgroundColor: "#1F2833",
      display: "block",
      alignItems: "center",
    },
    top: {
      display: "flex",
      height: "35vh",
      alignItems: "center",
      backgroundColor: "white",
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
    paragraph: { margin: "10px 0px", width: "600px", display: "flex" },
    bottom: { height: "65vh", backgroundColor: "blue" },
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
          Hello bottom
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Aboutme;
