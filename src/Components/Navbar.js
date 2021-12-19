import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import {
  Apps,
  AssignmentInd,
  ContactMail,
  Home,
  MenuOutlined,
} from "@mui/icons-material";
import { ClassNames } from "@emotion/react";
import avatar from "../img/avatar.jpg";
import { makeStyles, ThemeProvider } from "@mui/styles";

// CSS Styles
const useStyles = makeStyles(() => ({
  menuSliderContainer: {
    width: 250,
    height: "80vh",
    background: "#950740",
  },
  avatar: {
    display: "block",
    margin: "0px auto",
    width: 150,
    height: 150,
    border: "2px solid #1A1A1D",
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const sideList = (slider) => {
  <Box className={classes.menuSliderContainer} component="div">
    <Avatar className={classes.avatar} src={avatar} alt="Dennis Khor" />
    <Divider />
    <List>
      {menuItems.map((item, key) => (
        <ListItem button key={key}>
          <ListItemIcon>{item.listIcon}</ListItemIcon>
          <ListItemText
            primary={item.listText}
            className={classes.listItem}
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>;
};

const [state, setState] = useState({
  right: false,
});

const toggleDrawer = (slider, open) => {
  setState({ ...state, [slider]: open });
};
const classes = useStyles();
const Navbar = () => {
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#C3073F" }}>
          <Toolbar>
            <IconButton onClick={toggleDrawer("slider", true)}>
              <MenuOutlined style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Drawer open={state.right}>{sideList("right")}</Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
