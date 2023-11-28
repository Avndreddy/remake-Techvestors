// import * as React from "react";
// import "../App.css";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Logo from "../Logo.svg";
// import backdark from "./backdark.svg";
// import Grid from "@mui/material/Grid";
// import { Button, IconButton } from "@mui/material";

// export default function Test() {
//   return (
//     <Box>
//     <Box
//       sx={{
//         flexGrow: 1,
//         position: "inherit",
//         width: "100%",
//         top: 0,
//         zIndex: 1,
//       }}
//     >

//       {/* SVG content */}

     
//     <div style={{backgroundRepeat:"repeat-x"}}> <img
//             src={Logo}
//             alt="Logo"
//             style={{ width: "130%", maxWidth: "200px", marginRight: "10px" }}
//           /></div>

//       {/* AppBar */}
//       <AppBar
//         position="absolute"
//         color="transparent"
//         elevation={0}
//         variant="outlined"
//         sx={{
//           border: "2px solid #e7f5ff",
//           backgroundColor: "transparent",
//           marginTop: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         <Toolbar>
//           {/* Logo */}
//           <img
//             src={Logo}
//             alt="Logo"
//             style={{ width: "130%", maxWidth: "200px", marginRight: "10px" }}
//           />

//           {/* Text Buttons in a Grid Container */}
//           <Grid container spacing={2} justifyContent={"center"}>
//             <Grid item>
//               <Button color="inherit">Home</Button>
//             </Grid>
//             <Grid item>
//               <Button color="inherit">About</Button>
//             </Grid>
//             <Grid item>
//               <Button color="inherit">Contact</Button>
//             </Grid>
//           </Grid>

//           {/* IconButton (Example with MenuIcon) */}
//           <IconButton color="inherit" edge="end">
//             <Button style={{borderRadius:"20px"}} variant="contained">Enquire Now</Button>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
// <div className="App" style={{ justifyContent:"center"}} >
// <h1 className="bigHeading">techvertors</h1>
// <h1 style={{color:'#1e6eb5'}}>togeather we grow</h1>
// <pre className="ptag" style={{fontsize:40}}>
// Are you tired of dealing with the same old problems over and over <br/>
// again? techvestors offers a fresh perspective. Our team of techies invests <br/>
// in the latest and greatest technology to solve your challenges once and for all.
// </pre>
// <div style={{justifyContent:"center"}}>
// <Button style={{marginRight: "20px",borderRadius:"20px"}} variant="outlined" >Work with us</Button>
// <Button style={{marginLeft: "10px",borderRadius:"20px"}} variant="contained" >Enquire Now</Button>
// </div>
// </div>
//     </Box>
//   );
// }

import React from "react";
import backdark1 from "./backdark.svg";
import backdark2 from "./backlight.svg";
import backdark3 from "./backdark.svg";

const Test = () => {
  const containerStyle = {
    width: "100vw", // 100% of the viewport width
    height: "100vh", // 100% of the viewport height
    position: "relative",
    marginTop:"-70px" // Set the container to relative positioning
  };

  const backgroundStyle1 = {
    backgroundImage: `url(${backdark1})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto",
    backgroundPosition: "100px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };

  const backgroundStyle2 = {
    backgroundImage: `url(${backdark3})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto",
    backgroundPosition: "-100px 35px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${backdark2})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto",
    backgroundPosition: "10px 35px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };

  return (
    
    <div style={containerStyle}>
      <div style={backgroundStyle1}></div>
      <div style={backgroundStyle2}></div>
      <div style={backgroundStyle3}></div>
      
    </div>
  );
};

export default Test;

