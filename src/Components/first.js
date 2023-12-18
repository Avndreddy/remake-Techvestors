import * as React from "react";
import {Box,Button} from "@mui/material";

import "./Styles/first.css";
import "./Styles/utils.css";

export default function First() {
  return (
    <Box className="container section">
      <div className="first">
      <t className="bigHeading">techvertors</t>
      <t className="subHeading">togeather we grow</t>
      </div>
      <p className="ptag">
        Are you tired of dealing with the same old problems over and over again?
        techvestors offers a fresh perspective. Our team of techies invests in
        the latest and greatest technology to solve your challenges once and for
        all.
      </p>
      <div className="first-btn">
        <Button className="btns" variant="outlined" >Work with us</Button>
        <Button className="btns" variant="contained">Enquire Now</Button>
      </div>
    </Box>
  );
}
