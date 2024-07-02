import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import avatar from "../img/avatar.jpg";
import { skills } from "../data";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNuxtdotjs,
  SiContentful,
  SiJest,
  SiCypress,
  SiGit,
  SiHtml5,
  SiCss3,
  SiSass,
  SiAzuredevops,
  SiKubernetes,
  SiPostman,
  SiPython,
  SiRuby,
  SiMicrosoftazure,
  SiAmazonaws,
} from "react-icons/si";

const Aboutme = () => {
  const useStyles = makeStyles((theme) => ({
    page: {
      height: "100%",
      width: "100%",
      display: "block",
      backgroundColor: "#1F2833",
      alignItems: "center",
    },
    top: {
      display: "flex",
      height: "100%",
      width: "70%",
      maxWidth: "800px",
      margin: "auto",
      alignItems: "center",
      backgroundColor: "#1F2833",
      color: "#C5C6C7",
      flexWrap: "wrap",
      padding: "100px 0px",
      [theme.breakpoints.between("xs", "md")]: {
        padding: "10px 0px",
        flexDirection: "column",
      },
    },
    left: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      margin: "20px 0px",
    },
    about: {
      margin: "30px 0px",
      [theme.breakpoints.between("xs", "md")]: {
        margin: "5px 0px",
      },
    },
    right: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.between("xs", "md")]: {
        textAlign: "center",
      },
    },
    paragraph: {
      margin: "10px 0px",
      display: "flex",
      textAlign: "justify",
    },
    bottom: {
      height: "100%",
      minHeight: "60vh",
      maxWidth: "800px",
      width: "100%",
      display: "block",
      flexDirection: "column",
      padding: "0px 10px",
      margin: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
    skillsTitle: {
      color: "#C5C6C7",
      display: "flex",
      marginBottom: "30px",
      justifyContent: "center",
      alignItems: "center",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    skillCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "120px",
      height: "120px",
      backgroundColor: "#0B0C10",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    skillIcon: {
      fontSize: "3rem",
      color: "#45A29E",
      marginBottom: "10px",
    },
    skillName: {
      color: "#C5C6C7",
      fontSize: "1rem",
    },
  }));
  const classes = useStyles();

  const getSkillIcon = (icon) => {
    const icons = {
      react: <SiReact className={classes.skillIcon} />,
      vuejs: <SiVuedotjs className={classes.skillIcon} />,
      javascript: <SiJavascript className={classes.skillIcon} />,
      typescript: <SiTypescript className={classes.skillIcon} />,
      nodejs: <SiNodedotjs className={classes.skillIcon} />,
      nuxtjs: <SiNuxtdotjs className={classes.skillIcon} />,
      contentful: <SiContentful className={classes.skillIcon} />,
      jest: <SiJest className={classes.skillIcon} />,
      cypress: <SiCypress className={classes.skillIcon} />,
      git: <SiGit className={classes.skillIcon} />,
      html5: <SiHtml5 className={classes.skillIcon} />,
      css3: <SiCss3 className={classes.skillIcon} />,
      sass: <SiSass className={classes.skillIcon} />,
      azure: <SiAzuredevops className={classes.skillIcon} />,
      kubernetes: <SiKubernetes className={classes.skillIcon} />,
      postman: <SiPostman className={classes.skillIcon} />,
      python: <SiPython className={classes.skillIcon} />,
      ruby: <SiRuby className={classes.skillIcon} />,
      microsoftazure: <SiMicrosoftazure className={classes.skillIcon} />,
      amazonaws: <SiAmazonaws className={classes.skillIcon} />,
    };
    return icons[icon] || <SiReact className={classes.skillIcon} />;
  };

  return (
    <Box className={classes.page} id="about">
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
             As a Software Developer at Mudbath (Endava), I collaborate closely with a diverse team to design, develop, and optimize software applications. My experience spans multiple projects, including a sophisticated e-commerce website that leverages the latest technologies. My areas of expertise encompass Vue.js, React, Nuxt.js, TypeScript, JavaScript, headless CMS Contentful, AZ-900 and AWS Certified Cloud Practitioner
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.skillsTitle}>
          <Typography variant="h3" fontFamily="Overpass">
            Skills
          </Typography>
        </Box>
        <Grid className={classes.grid} container>
          {skills.map((skill) => (
            <Box className={classes.skillCard} key={skill.id}>
              {getSkillIcon(skill.icon)}
              <Typography className={classes.skillName}>
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Aboutme;
