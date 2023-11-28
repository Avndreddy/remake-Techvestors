import * as React from "react";
import "../App.css";
import { Button } from "@mui/material";


export default function First() {

  return (
   
<div className="App">
<h1 className="bigHeading">techvertors</h1>
<h1 style={{marginTop:-60,color:'#1e6eb5'}}>togeather we grow</h1>
<pre className="ptag" style={{fontsize:40}}>
Are you tired of dealing with the same old problems over and over <br/>
again? techvestors offers a fresh perspective. Our team of techies invests <br/>
in the latest and greatest technology to solve your challenges once and for all.
</pre>
<span>
<Button variant="outlined" >Work with us</Button>
<Button variant="contained" >Enquire Now</Button>
</span>
</div>
  );
}
