import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Footer = () => {
  const useStyles = makeStyles({
    container: {
      height: "10vh",
      backgroundColor: "blue",
      display: "flex",
      justifyContent: "space-between",
    },
    left: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    right: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconList: { display: "flex" },
    icon: { margin: "0px 10px", cursor: "pointer" },
  });
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.left}>
          <Typography variant="h6">© Dennis Khor 2021-2021 </Typography>
        </Box>
        <Box className={classes.right}>
          <Box className={classes.iconList}>
            <Box className={classes.icon}>
              <LinkedIn sx={{ width: "40px", height: "40px" }} />
            </Box>
            <Box className={classes.icon}>
              <GitHub sx={{ width: "40px", height: "40px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
