import * as React from "react";
import "../App.css";
import MenuAppBar from "./navbar";
import First from "./first";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
   <MenuAppBar/>
   <div style={{ marginTop: '-220px', position:"static" }}></div>
   <First/>
   </Box>
  );
}

