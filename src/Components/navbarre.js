import { useState, useEffect } from "react";
import "./Styles/utils.css";
import "./Styles/navbar.css";
import Logo from "../Logo.svg";
import { Box, AppBar, Toolbar, Grid, Button, IconButton } from "@mui/material";
import Test from "./test";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import First from "./first";

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

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  //const [width, height] = useWindowSize(); // Using the custom hook
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Bsize = isMobile ? "small" : "large";

  return (

    <Box className="container">

      <AppBar
        className="appbar"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          border: "2px solid #e7f5ff",
          borderRadius: "10px",

        }}
      >
        <Toolbar sx={{ display: "flex" }}>

          <img src={Logo} alt="Logo" className="logo" />

          {!isMobile && (
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <a className="atag" href="#">
                  Home
                </a>
              </Grid>
              <Grid item>
                <a className="atag" href="#">
                  About
                </a>
              </Grid>
              <Grid item>
                <a className="atag" href="#">
                  Contact
                </a>
              </Grid>
            </Grid>
          )}


          {!isMobile && (
            <IconButton color="inherit">
              <Button variant="contained" className="btn">
                Enquire Now
              </Button>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
