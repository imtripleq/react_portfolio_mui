import { Avatar, Box, CircularProgress, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import avatar from "../img/avatar.jpg";
import { skills } from "../data";

const Aboutme = () => {
  const useStyles = makeStyles({
    page: {
      height: "100vh",
      width: "100%",
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
      flexWrap: "wrap",
    },
    left: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      margin: "20px 0px",
    },
    about: { margin: "30px 0px" },
    right: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
    },
    paragraph: {
      margin: "10px 0px",
      display: "flex",
      textAlign: "justify",
    },
    bottom: {
      height: "65vh",
      width: "600px",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px",
      margin: "auto",
    },
    progress: {},
  });
  const classes = useStyles();

  const CircularProgressWithLabel = (props) => {
    return (
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          margin: "10px 40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={props.percentage}
          thickness={4.2}
          size={150}
          style={{ color: "#45A29E" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            fontFamily="Ropa Sans"
            component="div"
            color="#C5C6C7"
          >
            {props.language}
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Ropa Sans"
            component="div"
            color="#C5C6C7"
          >
            {props.percentage}%
          </Typography>
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
          rowSpacing={2}
          alignItems="flex - start"
          justifyContent="center"
        >
          {skills.map((item) => {
            return (
              <CircularProgressWithLabel
                language={item.languages}
                percentage={item.percentage}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Aboutme;
