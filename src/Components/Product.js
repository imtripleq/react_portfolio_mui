import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Product = ({ img, title, link, skills }) => {
  const useStyles = makeStyles((theme) => ({
    div: {
      width: "40%",
      height: "60vh",
      margin: "20px 30px",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#C5C6C7",

      [theme.breakpoints.between("xs", "md")]: {
        width: "90%",
        margin: "5px 0px",
      },
    },
    p: {
      width: "100%",
      height: "30vh",
      margin: "20px 30px",
      border: "2px solid rgb(243,242,242)",
      borderRadius: "10px 10px 0px 0px",
      overflow: "hidden",
      [theme.breakpoints.between("xs", "md")]: {
        width: "100%",
        maxWidth: "400px",
      },
    },
    browser: {
      height: "20px",
      backgroundColor: "rgb(243,242,242)",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      zIndex: "2",
    },
    circle: {
      width: "6px",
      height: "6px",
      backgroundColor: "white",
      margin: "3px",
      borderRadius: "50%",
    },
    img: {
      width: "100%",
      transition: "all 10s ease",
      "&:hover": { transform: "translateY(-100%)" },
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    button: {
      color: "#66FCF1!important",
      border: "1px solid !important",
      "&:hover": { backgroundColor: "#45A29E!important" },
    },
    skills: {
      width: "100%",
      height: "10vh",
      display: "inline-flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    skill: { fontSize: "10px!important", padding: "2px 3px" },
    item: {
      width: "50px",
      height: "35px",
      margin: "0px 5px",
      marginTop: "15px",
      display: "flex",
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0B0C10",
      color: "#66FCF1",
      borderRadius: "15%",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Box className={classes.div}>
        <Box>
          <Typography
            fontFamily="Overpass"
            sx={{ fontWeight: "500" }}
            variant="h6"
          >
            {title}
          </Typography>
        </Box>
        <Box className={classes.skills}>
          {skills.map((item, id) => {
            return (
              <Box className={classes.item} key={id}>
                <Typography className={classes.skill}>{item}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box className={classes.p}>
          <Box className={classes.browser}>
            <Box className={classes.circle}></Box>
            <Box className={classes.circle}></Box>
            <Box className={classes.circle}></Box>
          </Box>
          <img src={img} alt="dennis project" className={classes.img} />
        </Box>
        <Box className={classes.buttonContainer}>
          <Button className={classes.button} target="_blank" href={link}>
            Github
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Product;
