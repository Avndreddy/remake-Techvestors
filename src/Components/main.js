import React from "react";
import "./Styles/navbar.css";
import { Box } from "@mui/material";
import Nav from "./navbarre";
import First from "./first";
import Who from "./who";
import How from "./how";
import Why from "./why";
import Footer from "./footer";
import FAQSection from "./faq";
import AppBar from "./appbar";

export default function Main() {

  return (
<Box className="container">
  <AppBar/>
  <First/>
  <Who/>
  <How/>
  <Why/>
  <FAQSection/>
</Box>
  );
}
