import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  makeStyles,
} from "@mui/material";

import { MenuOutlined } from "@mui/icons-material";

// CSS Styles
// const useStyles = makeStyles({
//   menuDropDown: {},
// });

const Navbar = () => {
  return (
    <>
      <Box component="div"></Box>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#C3073F" }}>
          <Toolbar>
            <IconButton>
              <MenuOutlined style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
