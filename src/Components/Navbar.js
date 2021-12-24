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
  Drawer,
  Stack,
} from "@mui/material";
import {
  Apps,
  AssignmentInd,
  ContactMail,
  Download,
  GitHub,
  Home,
  LinkedIn,
  MailOutlined,
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
    justifyContent: "space-between",
  },
  avatarContainer: { height: "20%" },
  avatar: {
    display: "block",
    margin: "20% auto",
    border: "1px solid #0B0C10",
  },
  divider: {},
  listcontainer: { height: "60%" },
  listItem: {
    color: "#0B0C10",
  },
  navBottom: {
    height: "8%",
    position: "relative",
    backgroundColor: "#1F2833",
  },
  iconList: {
    width: "100%",
    height: "100%",
    display: "inline-flex",
    margin: "auto",
    justifyContent: "left",
    alignItems: "center",
  },
  icon: { margin: "10px 5px", color: "#C5C6C7" },
}));

// Menu Listing
// const menuItems = [
//   {
//     listIcon: <Home />,
//     listText: "Home",
//   },
//   {
//     listIcon: <AssignmentInd />,
//     listText: "About Me",
//   },
//   {
//     listIcon: <Apps />,
//     listText: "Portfolio",
//   },
//   {
//     listIcon: <ContactMail />,
//     listText: "Contacts",
//   },
// ];

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

  // const scrollTry = document.getElementsByClassName("makeStyles-page-19");

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
      <Box className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Dennis Khor"
          sx={{ width: 150, height: 150, boxShadow: 15 }}
        />
      </Box>
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box className={classes.listcontainer}>
        <List>
          <ListItem button key="1" onClick={() => handleClick(0)}>
            <ListItemIcon style={{ color: "#0B0C10" }}>
              <Home />
            </ListItemIcon>
            <h3>Home</h3>
          </ListItem>
          <ListItem button key="2" onClick={() => handleClick(1000)}>
            <ListItemIcon style={{ color: "#0B0C10" }}>
              <AssignmentInd />
            </ListItemIcon>
            <h3>About Me</h3>
          </ListItem>
          <ListItem button key="3" onClick={() => handleClick(2100)}>
            <ListItemIcon style={{ color: "#0B0C10" }}>
              <Apps />
            </ListItemIcon>
            <h3>Portfolio</h3>
          </ListItem>
          <ListItem button key="4" onClick={() => handleClick(4400)}>
            <ListItemIcon style={{ color: "#0B0C10" }}>
              <ContactMail />
            </ListItemIcon>
            <h3>Contact Me</h3>
          </ListItem>
          <a
            href="https://drive.google.com/file/d/1CrSTy7kvPLN_XyZlmqIN9OPWarJD35hK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemIcon style={{ color: "#0B0C10" }}>
                <Download />
              </ListItemIcon>
              <h3>Download Resume</h3>
            </ListItem>
          </a>
        </List>
      </Box>
      <Box className={classes.navBottom}>
        <Box className={classes.iconList}>
          <Box className={classes.icon}>
            <a
              href="https://www.linkedin.com/in/denniskhor3139/"
              style={{ color: "inherit" }}
            >
              <LinkedIn sx={{ width: "35px", height: "35px" }} />
            </a>
          </Box>
          <Box className={classes.icon}>
            <a href="mailto:denniskcc@hotmail.com" style={{ color: "inherit" }}>
              <MailOutlined sx={{ width: "35px", height: "35px" }} />
            </a>
          </Box>
          <Box className={classes.icon}>
            <a href="https://github.com/imtripleq" style={{ color: "inherit" }}>
              <GitHub sx={{ width: "35px", height: "35px" }} />
            </a>
          </Box>
        </Box>
      </Box>
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
