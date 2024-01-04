import { Box,Button, IconButton } from "@mui/material";
import "./Styles/how.css";
import "./Styles/utils.css";

import applyimg from "./apply.svg";
export default function How() {
  return (
    <Box className="container section how">
      <div className="title-txt">
        <div className="whitetext">how</div>
        <div className="text-subtitle">We Work</div>
      </div>
      <div className="grid-parent ">
        <article className="box">
        <circle className="circle">1</circle>
          <mytitle className="box-title">Apply</mytitle>
          <img className="howimg" src={applyimg} alt=""/>
          To get started, simply fill out our online application form and
          provide us with some basic information about your project.
        </article>
        <article className="box">
        <circle className="circle">2</circle>
          <mytitle className="box-title">Screening</mytitle>
          <img className="howimg" src={applyimg} alt=""/>
          To get started, simply fill out our online application form and
          provide us with some basic information about your project.
        </article>
        <article className="box">
        <circle className="circle">3</circle>
          <mytitle className="box-title">Analysis</mytitle>
          <img className="howimg" src={applyimg} alt="" />
          If your project meets our criteria, we will conduct a thorough
          analysis of your requirements and provide you with a detailed proposal
          outlining our recommended approach.
        </article>
        <article className="box">
        <circle className="circle">4</circle>
          <mytitle className="box-title">Proposal</mytitle>
          <img className="howimg" src={applyimg} alt=""/>
          Our proposal will include a detailed breakdown of our recommended
          approach, along with a timeline and cost estimate for the project.
        </article>
        <article className="box">
        <circle className="circle">5</circle>
          <mytitle className="box-title">Development</mytitle>
          <img className="howimg" src={applyimg} alt=""/>
          Once you approve our proposal, we will begin development work on your
          project, keeping you informed every step of the way.
        </article>
      </div>
      <div className="how-read">
        <heading className="R-title">
          Ready to get started on your project?
        </heading>
        <ol>
          <li className="R-text">
            Simply fill out our online application form and we'll be in touch
            shortly to discuss your requirements in more detail.
          </li>
          <li className="R-text">
            Our application form is quick and easy to complete, and will provide
            us with the information we need to determine whether your project is
            a good fit for our services. Once we receive your application, our
            team will review it and get back to you within 24-48 hours to
            schedule a call to discuss your project in more detail.
          </li>
          <li className="R-text">
            Don't wait any longer to turn your ideas into reality. Apply now and
            let us help you achieve your goals online!
          </li>
        </ol>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Button className="btn" variant="contained" sx={{borderRadius:'20px',fontWeight:"700"}}>Enquire Now</Button>
      </div>
    </Box>
  );
}
