import { useState, useEffect } from "react";
import "./Styles/navbar.css";
import Logo from "../Logo.svg";
import { Box, AppBar, Toolbar, Grid, Button, IconButton } from "@mui/material";
import Test from "./test";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Nav from "./navbarre";
import First from "./first";
import Who from "./who";
import How from "./how";

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function Main() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  //const [width, height] = useWindowSize(); // Using the custom hook
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Bsize = isMobile ? "small" : "large";

  return (
<Box className="container">
  <Nav/>
  <First/>
  <Who/>
  <How/>
</Box>
  );
}
