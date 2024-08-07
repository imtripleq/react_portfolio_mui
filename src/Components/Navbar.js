import React, { useState, useEffect } from "react";
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
import { Link as ScrollLink } from "react-scroll";
import avatar from "../img/avatar.jpg";
import { makeStyles } from "@mui/styles";
import axios from "axios";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    height: "100vh",
    background: "#45A29E",
    justifyContent: "space-between",
    display: "flex",
  },
  appBar: { background: "#1A1A1D!important", opacity: "0.75" },
  menu: { color: "white", marginLeft: "10px!important", flexGrow: 1 },
  avatarContainer: {
    flex: 1,
    margin: "5% 0%",
    maxWidth: "300px",
    maxHeight: "200px",
  },
  avatar: {
    height: "100%",
    width: "100%",
    margin: "10% auto",
    border: "1px solid #0B0C10",
    [theme.breakpoints.between("xs", "md")]: {
      margin: "10% auto",
    },
  },
  divider: {},
  listcontainer: { height: "60%", color: "#0B0C10", flex: 3 },
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
    justifyContent: "center",
    alignItems: "center",
    color: "#C5C6C7!important",
  },
  icon: {
    color: "#0B0C10!important",
    [theme.breakpoints.between("xs", "md")]: {},
  },
  bottomIcon: { margin: "0px 10px" },
  ScrollLink: { display: "flex" },
}));

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    const gistsAddress = process.env.REACT_APP_GISTS_ADDRESS;
    console.log("address", gistsAddress);
    const fetchResumeLink = async () => {
      try {
        const response = await axios.get(gistsAddress);
        const resumeUrl = response.data.files["gistfile1.txt"].content;
        setResumeLink(resumeUrl);
      } catch (error) {
        console.error("Error fetching the resume link: ", error);
      }
    };
    fetchResumeLink();
  }, []);

  const toggleDrawer = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

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
          sx={{ width: "60%", height: "90%", boxShadow: 15 }}
        />
      </Box>
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box className={classes.listcontainer}>
        <List>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={classes.ScrollLink}
          >
            <ListItem button key="1">
              <ListItemIcon className={classes.icon}>
                <Home />
              </ListItemIcon>
              <h3>Home</h3>
            </ListItem>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={classes.ScrollLink}
          >
            <ListItem button key="2">
              <ListItemIcon className={classes.icon}>
                <AssignmentInd />
              </ListItemIcon>
              <h3>About Me</h3>
            </ListItem>
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            className={classes.ScrollLink}
          >
            <ListItem button key="3">
              <ListItemIcon className={classes.icon}>
                <Apps />
              </ListItemIcon>
              <h3>Portfolio</h3>
            </ListItem>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={classes.ScrollLink}
          >
            <ListItem button key="4">
              <ListItemIcon className={classes.icon}>
                <ContactMail />
              </ListItemIcon>
              <h3>Contact Me</h3>
            </ListItem>
          </ScrollLink>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <Download />
              </ListItemIcon>
              <h3>Download Resume</h3>
            </ListItem>
          </a>
        </List>
      </Box>
      <Box className={classes.navBottom}>
        <Box className={classes.iconList}>
          <Box className={classes.bottomIcon}>
            <a
              href={process.env.REACT_APP_LINKEDIN_LINK}
              style={{ color: "inherit" }}
            >
              <LinkedIn sx={{ width: "35px", height: "35px" }} />
            </a>
          </Box>
          <Box className={classes.bottomIcon}>
            <a href={`mailto:${process.env.REACT_APP_EMAIL}`} style={{ color: "inherit" }}>
              <MailOutlined sx={{ width: "35px", height: "35px" }} />
            </a>
          </Box>
          <Box className={classes.bottomIcon}>
            <a href={process.env.REACT_APP_GITHUB_LINK} style={{ color: "inherit" }}>
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
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuOutlined style={{ color: "#66FCF1" }} />
              <Typography className={classes.menu} variant="h6">
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
