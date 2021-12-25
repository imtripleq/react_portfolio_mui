import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import globalTheme from "./globalTheme";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <Home />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
