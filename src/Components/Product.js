import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Product = ({ img, title, link, skills }) => {
  const useStyles = makeStyles({
    div: {
      width: "40%",
      height: "60vh",
      margin: "20px 30px",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#C5C6C7",
    },
    p: {
      width: "100%",
      height: "50vh",
      margin: "20px 30px",
      border: "2px solid rgb(243,242,242)",
      borderRadius: "10px 10px 0px 0px",
      overflow: "hidden",
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
    button: { color: "#66FCF1" },
    skills: {
      width: "100%",
      height: "10vh",
      display: "inline-flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
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
  });
  console.log(skills);
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.div}>
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
                <Typography
                  fontFamily="Ropa Sans"
                  sx={{ fontSize: "10px", padding: "2px 3px" }}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box component="div" className={classes.p}>
          <Box component="div" className={classes.browser}>
            <Box component="div" className={classes.circle}></Box>
            <Box component="div" className={classes.circle}></Box>
            <Box component="div" className={classes.circle}></Box>
          </Box>
          <img src={img} alt="dennis project" className={classes.img} />
        </Box>
        <Box component="div" className={classes.buttonContainer}>
          <Button
            className={classes.button}
            style={{
              color: "#66FCF1",
              border: "1px solid",
              fontFamily: "Ropa Sans",
            }}
            target="_blank"
            href={link}
          >
            Github
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Product;
