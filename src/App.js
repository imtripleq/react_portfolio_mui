import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
