import { Done, Email, LocationOn, Phone } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const useStyles = makeStyles({
    container: {
      height: "90vh",
      backgroundColor: "white",
      position: "relative",
    },
    bg: {
      width: "20px",
      height: "100%",
      backgroundColor: "#66FCF1",
      position: "absolute",
    },
    wrapper: {
      height: "90vh",
      padding: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    left: { flex: "1" },
    right: {
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {},
    infoItem: {
      display: "flex",
      alignItems: "center",
      margin: "50px 0px",
      width: "70%",
    },
    icon: { marginRight: "20px" },
    desc: {},
    form: { marginTop: "20px", display: "flex", flexDirection: "column" },
    input: {
      width: "50%",
      height: "50px",
      border: "none",
      borderBottom: "1px solid black",
      margin: "10px 0px",
      fontSize: "14px",
      paddingLeft: "10px",
    },
    textarea: {
      width: "100%",
      margin: "10px 0px",
      fontSize: "14px",
      paddingLeft: "10px",
    },
  });
  const classes = useStyles();
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yf2a55m",
        "template_inb5hmo",
        formRef.current,
        "user_TBZQMyLZaUNMZUrasoEZ2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.bg}></Box>
        <Box className={classes.wrapper}>
          <Box className={classes.left}>
            <Typography variant="h2">Let's discuss your project</Typography>
            <Box className={classes.info}>
              <Box className={classes.infoItem}>
                <Phone className={classes.icon} />
                +61 4 2695 8742
              </Box>
              <Box className={classes.infoItem}>
                <Email className={classes.icon} /> denniskcc@hotmail.com
              </Box>
              <Box className={classes.infoItem}>
                <LocationOn className={classes.icon} /> Sydney , NSW
              </Box>
            </Box>
          </Box>
          <Box className={classes.right}>
            <Box className={classes.desc}>
              <Typography variant="body1">
                You're welcome to use the form below to send me message. I'm
                happy to have each other contacted.
              </Typography>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={classes.form}
              >
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
                <textarea
                  className={classes.textarea}
                  rows="5"
                  placeholder="Message"
                  name="message"
                />
                <Button type="submit" style={{ color: "#45A29E" }}>
                  Submit
                </Button>
                {done && (
                  <Done
                    color="success"
                    sx={{ margin: "20px 0px", marginRight: "10px" }}
                  />
                )}
                {done && "Submitted! Thank you!"}
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
