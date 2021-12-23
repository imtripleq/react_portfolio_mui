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
  Stack,
} from "@mui/material";
import {
  Apps,
  AssignmentInd,
  ContactMail,
  Home,
  MenuOutlined,
} from "@mui/icons-material";
import avatar from "../img/avatar.jpg";
import { makeStyles } from "@mui/styles";

// CSS Styles
const useStyles = makeStyles(() => ({
  menuSliderContainer: {
    width: 250,
    height: "100vh",
    background: "#45A29E",
  },
  avatar: {
    display: "block",
    margin: "20% auto",
    border: "1px solid #0B0C10",
  },
  listItem: {
    color: "#0B0C10",
  },
}));

// Menu Listing
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About Me",
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

// NavBar Starts Here
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  //Toggle button
  const toggleDrawer = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const scrollTry = document.getElementsByClassName("makeStyles-page-19");

  const handleClick = (e) => {
    window.scrollTo({
      top: e,
      left: 0,
      behavior: "smooth",
    });
  };

  // Side Bar
  const sideList = (slider) => (
    <Stack
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleDrawer(slider, false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Dennis Khor"
        sx={{ width: 150, height: 150, boxShadow: 15 }}
      />
      <Divider />
      <List>
        <ListItem button key="1" onClick={() => handleClick(0)}>
          <ListItemIcon style={{ color: "#0B0C10" }}>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button key="2" onClick={() => handleClick(1000)}>
          <ListItemIcon style={{ color: "#0B0C10" }}>
            <AssignmentInd />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <ListItem button key="3" onClick={() => handleClick(2100)}>
          <ListItemIcon style={{ color: "#0B0C10" }}>
            <Apps />
          </ListItemIcon>
          <ListItemText>Portfolio</ListItemText>
        </ListItem>
        <ListItem button key="4" onClick={() => handleClick(4400)}>
          <ListItemIcon style={{ color: "#0B0C10" }}>
            <ContactMail />
          </ListItemIcon>
          <ListItemText>Contact</ListItemText>
        </ListItem>
      </List>
    </Stack>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="fixed"
          style={{ background: "#1A1A1D", opacity: "0.75" }}
        >
          <Toolbar>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuOutlined style={{ color: "#66FCF1" }} />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "white", marginLeft: "10px" }}
              >
                Menu
              </Typography>
            </IconButton>
            <Drawer
              anchor="left"
              open={state.right}
              onClose={toggleDrawer("right", false)}
            >
              {sideList("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
