import "./Styles/foot.css";
import { Box } from "@mui/material";
import logo_white from "./logo-white.png";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Foot(){
    return(
        <Box className="container footer ">

      <div className="icon-container icon">
        <div className="white-logo">
          <img src={logo_white} alt="" />
        </div>
          <div>
            <PinDropOutlinedIcon fontSize="small" /> Bengaluru,Karnataka,IN
          </div>
          <div className="white-icon">
            <div className="fb"><FacebookIcon  fontSize="large" /></div>
          <div className="insta"><InstagramIcon  fontSize="large" /></div>
          <div className="linkdin"><LinkedInIcon  fontSize="large" /></div>
          <div className="github"> <GitHubIcon  fontSize="large" /></div>
        </div>

        <div className="a-link" maxWidth="xl">
        <div className="atags">
          <strong>Company</strong>
          <a href="#" className="text-effect" >Enquire</a>
          <a href="#" className="text-effect">Careers</a>
        </div>

        <div className="atags">
          <strong>Services</strong>
          <a href="#" className="text-effect">Mobile Apps</a>
          <a href="#" className="text-effect">Web Apps</a>
          <a href="#" className="text-effect">Automation</a>
        </div>

        <div className="atags">
          <strong>Products</strong>
          <a href="#" className="text-effect">VastrX</a>
        </div>
        <div className="atags">
          <strong>Contact</strong>
          <a>Support@Techvestors.Tech</a>
          <a>+91 8884937987</a>
        </div>
      </div>
<hr></hr>
    <div className="botton-text">
      
        © 2023 techvestors technologies private limited. all rights reserved
      </div>
      

      </div>


      
        </Box>
    );
}
