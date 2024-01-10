import React, { useState } from "react";
import { Box, Button, Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo.svg";
import "./Styles/appbar.css";

export default function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box className="">
      <div className="appBar">
        <div style={{ position: "static" }}>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="atag">
          <a href="#">Home</a>
          <a href="#">Solutions</a>
          <a href="#">Work With Us</a>
        </div>
        <div className="app-bar-btn">
          <Button variant="contained" className="btn">
            Enquire Now
          </Button>
        </div>
        <div className="menu" onClick={handleDrawerOpen}>
          <MenuIcon />
        </div>
      </div>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <IconButton
          style={{ position: "absolute", top: 10, right: 10 }}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
        <br/>
        <br/>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Solutions" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Work With Us" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Button variant="contained" className="btn">
              Enquire Now
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
