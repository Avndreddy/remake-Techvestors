import * as React from "react";
import {Box,Button} from "@mui/material";
import "./Styles/first.css";
import "./Styles/utils.css";
const url = "https://fr2iizdys3b.typeform.com/to/T23kcKoM?typeform-source=techvestors.tech";

export default function First() {
  
  return (
    <Box >
      <div className="first-Container">
      <div className="first">
      <div className="bigHeading">techvestors</div>
      <div className="subHeading">togeather we grow</div>
      </div>
      <p className="ptag">
        Are you tired of dealing with the same old problems over and over again?
        techvestors offers a fresh perspective. Our team of techies invests in
        the latest and greatest technology to solve your challenges once and for
        all.
      </p>
      <div className="first-btn">
      <Button className="btns" variant="outlined" >Work with us</Button>
      <Button className="btns" variant="contained" onClick={() => window.open(url, '_blank')}>Enquire Now</Button>
      </div>
      </div>
    </Box>
  );
}
