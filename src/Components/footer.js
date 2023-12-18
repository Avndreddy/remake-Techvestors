import "./Styles/utils.css";
import "./Styles/footer.css";
import logo_white from "./logo-white.png";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box className="container footer footer-container section">
      <div className="icon-container">
        <div className="white-logo">
          <img src={logo_white} alt="" />
        </div>
          <t>
            <PinDropOutlinedIcon fontSize="small" /> Bengaluru,Karnataka,IN
          </t>
          <span className="iconcolor">
          <FacebookIcon className="iconcolor" fontSize="large" />
          <InstagramIcon className="iconcolor" fontSize="large" />
          <LinkedInIcon className="iconcolor" fontSize="large" />
          <GitHubIcon className="iconcolor" fontSize="large" />
        </span>
      </div>

      <div className="a-link" maxWidth="xl">
        <div className="company">
          <strong>Company</strong>
          <a href="#" className="text-effect" >Enquire</a>
          <a href="#" className="text-effect">Careers</a>
        </div>

        <div className="company">
          <strong>Services</strong>
          <a href="#" className="text-effect">Mobile Apps</a>
          <a href="#" className="text-effect">Web Apps</a>
          <a href="#" className="text-effect">Automation</a>
        </div>

        <div className="company">
          <strong>Products</strong>
          <a href="#" className="text-effect">VastrX</a>
        </div>
        <div className="company">
          <strong>Contact</strong>
          <a>Support@Techvestors.Tech</a>
          <a>+91 8884937987</a>
        </div>
      </div>
<hr></hr>
    <div className="botton-text">
      
        © 2023 techvestors technologies private limited. all rights reserved
      </div>
      
    </Box>
  );
}
