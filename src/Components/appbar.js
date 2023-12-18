import "./Styles/appbar.css";
import { Box, Button } from "@mui/material";
import Logo from "../Logo.svg";

export default function AppBar() {
  return (
    <Box className="conatiner">
      <div className="appBar">
        <div style={{position:"static"}}>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="atag">
          <a href="#">one</a>
          <a href="#">two</a>
          <a href="#">three</a>
        </div>
        <div className="app-bar-btn">
          <Button variant="contained" className="btn">
            Enquire Now
          </Button>
        </div>
        <div className="menu"><p>testing</p></div>
      </div>
    </Box>
  );
}
