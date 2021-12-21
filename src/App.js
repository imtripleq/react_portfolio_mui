import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Aboutme from "./Components/Aboutme";

function App() {
  return (
    <>
      <CssBaseline />
      <Home />
      <Aboutme />
    </>
  );
}

export default App;
