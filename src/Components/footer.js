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
    <Box className=" footer footer-container">
      <div className="icon-container">
        <div className="white-logo">
          <img src={logo_white} alt="" />
        </div>
        <div>
          <PinDropOutlinedIcon fontSize="small" /> Bengaluru,Karnataka,IN
        </div>
        <div className="white-icon">
          <div className="fb">
            <FacebookIcon fontSize="large" />
          </div>
          <div className="insta">
            <InstagramIcon fontSize="large" />
          </div>
          <div className="linkdin">
            <LinkedInIcon fontSize="large" />
          </div>
          <div className="github">
            {" "}
            <GitHubIcon fontSize="large" />
          </div>
        </div>
      </div>

      <div className="a-link boxx" maxWidth="xl">
        <div className="company boxx">
          <t>Company</t>
          <a href="#" className="text-effect">
            Enquire
          </a>
          <a href="#" className="text-effect">
            Careers
          </a>
        </div>

        <div className="company boxx">
          <t>Services</t>
          <a href="#" className="text-effect">
            Mobile Apps
          </a>
          <a href="#" className="text-effect">
            Web Apps
          </a>
          <a href="#" className="text-effect">
            Automation
          </a>
        </div>

        <div className="company boxx">
          <t>Products</t>
          <a href="#" className="text-effect">
            VastrX
          </a>
        </div>
        <div className="company boxx">
          <t>Contact</t>
          <a className="text-effect">Support@Techvestors.Tech</a>
          <a className="text-effect">+91 8884937987</a>
        </div>
      </div>
      <div className="botton-text">
        © 2023 techvestors technologies private limited. all rights reserved
      </div>
    </Box>
  );
}
