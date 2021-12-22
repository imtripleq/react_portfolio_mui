import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Aboutme />
      <Portfolio />
    </>
  );
}

export default App;
