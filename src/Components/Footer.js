import { GitHub, LinkedIn, MailOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      height: "10vh",
      backgroundColor: "#1F2833",
      display: "flex",
      justifyContent: "space-between",
      color: "#C5C6C7",
    },

    left: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    copyright: {
      margin: "0px 10px",
      [theme.breakpoints.between("xs", "md")]: {
        margin: "0px 5px",
      },
    },
    right: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconList: { display: "flex" },
    icon: {
      margin: "0px 10px",
      cursor: "pointer",
      [theme.breakpoints.between("xs", "md")]: {
        margin: "0px 5px",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.left}>
          <Box className={classes.copyright}>
            <Typography
              fontFamily="Gelasio"
              style={{ fontWeight: 100 }}
              variant="body2"
              className={classes.copyrightFont}
            >
              © Copyright by Dennis Khor 2021-2022
            </Typography>
          </Box>
        </Box>
        <Box className={classes.right}>
          <Box className={classes.iconList}>
            <Box className={classes.icon}>
              <a
                href="https://www.linkedin.com/in/denniskhor3139/"
                style={{ color: "inherit" }}
              >
                <LinkedIn sx={{ width: "40px", height: "40px" }} />
              </a>
            </Box>
            <Box className={classes.icon}>
              <a
                href="mailto:denniskcc@hotmail.com"
                style={{ color: "inherit" }}
              >
                <MailOutlined sx={{ width: "40px", height: "40px" }} />
              </a>
            </Box>
            <Box className={classes.icon}>
              <a
                href="https://github.com/imtripleq"
                style={{ color: "inherit" }}
              >
                <GitHub sx={{ width: "40px", height: "40px" }} />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
