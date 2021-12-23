import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Aboutme />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
