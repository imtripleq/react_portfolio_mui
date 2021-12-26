import { Avatar, Box, CircularProgress, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import avatar from "../img/avatar.jpg";
import { skills } from "../data";

const Aboutme = () => {
  const useStyles = makeStyles((theme) => ({
    page: {
      height: "100%",
      width: "100%",
      display: "block",
      backgroundColor: "#1F2833",
      alignItems: "center",
    },
    top: {
      display: "flex",
      height: "100%",
      width: "70%",
      maxWidth: "800px",
      margin: "auto",
      alignItems: "center",
      backgroundColor: "#1F2833",
      color: "#C5C6C7",
      flexWrap: "wrap",
      padding: "100px 0px",
      [theme.breakpoints.between("xs", "md")]: {
        padding: "10px 0px",
        flexDirection: "column",
      },
    },
    left: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      margin: "20px 0px",
    },
    about: {
      margin: "30px 0px",
      [theme.breakpoints.between("xs", "md")]: {
        margin: "5px 0px",
      },
    },
    right: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.between("xs", "md")]: {
        textAlign: "center",
      },
    },
    paragraph: {
      margin: "10px 0px",
      display: "flex",
      textAlign: "justify",
    },
    bottom: {
      height: "100%",
      minHeight: "60vh",
      maxWidth: "800px",
      width: "100%",
      display: "block",
      flexDirection: "column",
      padding: "0px 10px",
      margin: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
    progress: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {},
    circularBox: {
      position: "relative",
      display: "flex",
      margin: "5px 40px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.between("xs", "md")]: {
        display: "none",
      },
    },
    circularBoxSm: {
      position: "relative",
      display: "flex",
      margin: "5px 40px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    circular: { color: "#45A29E!important" },
    circularTextBox: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "#C5C6C7",
    },
    circularFont: { fontSize: "15px!important" },
  }));
  const classes = useStyles();

  // Skills Percentage with Title
  const CircularProgressWithLabel = (props) => {
    return (
      <Box>
        <Box className={classes.circularBox}>
          <CircularProgress
            className={classes.circular}
            variant="determinate"
            value={props.percentage}
            thickness={4.2}
            size={150}
          />
          <Box className={classes.circularTextBox}>
            <Typography variant="body1" component="div">
              {props.language}
            </Typography>
            <Typography variant="h3" component="div">
              {props.percentage}%
            </Typography>
          </Box>
        </Box>
        <Box className={classes.circularBoxSm}>
          <CircularProgress
            className={classes.circular}
            variant="determinate"
            value={props.percentage}
            thickness={4.2}
            size={90}
          />
          <Box className={classes.circularTextBox}>
            <Typography
              className={classes.circularFont}
              variant="body1"
              component="div"
            >
              {props.language}
            </Typography>
            <Typography
              className={classes.circularFont}
              variant="h3"
              component="div"
            >
              {props.percentage}%
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={classes.page}>
      <Box className={classes.top}>
        <Box className={classes.left}>
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Dennis Khor"
            sx={{ width: 100, height: 100, boxShadow: 15 }}
          />
        </Box>
        <Box className={classes.right}>
          <Box className={classes.about}>
            <Typography variant="h3" fontFamily="Overpass">
              Let Me Introduce Myself
            </Typography>
          </Box>
          <Box className={classes.paragraph}>
            <Typography
              paragraph
              variant="h6"
              fontFamily="Gelasio"
              style={{ fontWeight: "50" }}
            >
              Self-driven Front-End Developer with the ability to learn, adapt
              and grow in different environments. Highly self-motivated,
              responsible, with a get-it-done, on-time and high-quality product
              spirit. A career changer who is ready to adapt and grow in the new
              environment.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Grid
          className={classes.progress}
          container
          alignItems="flex - start"
          justifyContent="center"
          columns={3}
          wrap="wrap"
        >
          {skills.map((item) => {
            return (
              <Box className={classes.circle}>
                <CircularProgressWithLabel
                  language={item.languages}
                  percentage={item.percentage}
                  key={item.id}
                />
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Aboutme;
