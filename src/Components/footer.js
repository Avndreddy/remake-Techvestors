import "./Styles/utils.css";
import "./Styles/footer.css";
import logo_white from "./logo-white.png";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box className="container footer">
      <div className="footer-container" maxWidth="xl">
        <div className="company">
          <img src={logo_white} alt="" />
          Bengaluru,Karnataka,IN
        </div>
        <div className="company">
          <strong>company</strong>
          <t>Enquire</t>
          <t>Careers</t>
        </div>

        <div className="company">
          <strong>Services</strong>
          <t>Mobile Apps</t>
          <t>Web Apps</t>
          <t>Automation</t>
        </div>

        <div className="company">
          <strong>Products</strong>
          <t>VastrX</t>
        </div>

        
      </div>
      <div className="botton-text">
          © 2023 techvestors technologies private limited. all rights reserved
        </div>
    </Box>
  );
}
