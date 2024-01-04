import { Box } from "@mui/material";
import fulltitle from "./mysvg/0.svg";
import one from "./mysvg/1.svg";
import two from "./mysvg/2.svg";
import three from "./mysvg/3.svg";
import four from "./mysvg/4.svg";
import five from "./mysvg/5.svg";
import six from "./mysvg/6.svg";
import "./Styles/why.css";

export default function Why() {
  return (
    <Box style={{backgroundcolor: "#eff7fa"}} className="container why section hexagon-container">
        <div className="maindiv " >
      <div className="hexagon-wrapper ">      
        <img  src={one} alt="1" className="contentimg topimg" />   
        <img  src={two} alt="2" className="contentimg topimg" />
      </div>
      <div className="hexagon-wrapper midcontainer">
        <img className="contentimg" src={three} alt="3" />
        <img className="fulltitle" src={fulltitle} alt="Full Title" />
        <img className="contentimg" src={five} alt="5" />
      </div>
      <div className="hexagon-wrapper">
      <img className="contentimg downimg" src={four} alt="4" />
        <img className="contentimg downimg" src={six} alt="6" />

      </div>

      </div>
      
    </Box>
  );
}
