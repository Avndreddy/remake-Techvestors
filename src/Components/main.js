import React from "react";
import "./Styles/navbar.css";
import { Box } from "@mui/material";
import Nav from "./navbarre";
import First from "./first";
import Who from "./who";
import How from "./how";
import Why from "./why";

export default function Main() {

  return (
<Box className="container">
  <Nav/>
  <First/>
  <Who/>
  <How/>
  <Why/>
</Box>
  );
}
