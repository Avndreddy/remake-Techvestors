import React, { useState } from "react";
import { Box } from "@mui/material";
import "./Styles/faq.css";
import { ReactComponent as ArrowDown } from "./mysvg/arrowdown.svg";

export default function FAQSection() {
  const [showans, setshowans] = useState([false, false, false, false, false]);

  const toggleAnswer = (index) => {
    setshowans((prevShowAns) => {
      const newShowAns = [...prevShowAns];
      newShowAns[index] = !newShowAns[index];
      return newShowAns;
    });
  };

  const ans = showans ? "unset" : "none";

  return (
    <Box className="section Faq">
      <div>
        <div className="whitetext">FAQ</div>
        <div className="text-subtitle">Need Help?</div>
      </div>
      <div className="main-container">
        <div class="toggle-container">
          <div class="question" onClick={() => toggleAnswer(0)}>
            <t>What services does techvestors offer?</t>
            <last>
              <ArrowDown />
            </last>
          </div>
          {showans[0] && (
            <div className="answer" style={{ display: ans }}>
              <strong>techvestors</strong> offers a comprehensive range of
              services including app development, web development, automation,
              social media marketing, CRM solutions, digital marketing, and
              website hosting. Our team of experts specializes in creating
              innovative and customized solutions to meet your business needs.
              From building cutting-edge apps and websites to streamlining your
              business processes with automation and CRM solutions, we have you
              covered. Our digital marketing strategies ensure maximum online
              visibility for your brand. We also provide reliable website
              hosting services to keep your website performing at its best.
              Contact us for top-notch technology solutions in India.
            </div>
          )}
        </div>
        <div class="toggle-container">
          <div class="question" onClick={() => toggleAnswer(1)}>
            <t>How does techvestors work with clients?</t>
            <last>
              <ArrowDown />
            </last>
          </div>
          {showans[1] && (
            <div className="answer" style={{ display: ans }}>
              <strong>techvestors</strong> works closely with clients to deliver
              tailored solutions for their digital needs. Our team of experts in
              app development, web development, automation, social media
              marketing, CRM solutions, digital marketing, and website hosting
              collaborate with clients to understand their requirements, goals,
              and budget. We use cutting-edge technologies to design and develop
              custom solutions, implement effective digital marketing
              strategies, and provide reliable website hosting services. Our
              client-centric approach ensures seamless communication, timely
              project updates, and superior results. Partner with Techvestors
              for top-notch digital services in India.
            </div>
          )}
        </div>
        <div class="toggle-container">
          <div class="question" onClick={() => toggleAnswer(2)}>
            <t>Is there a flat rate for all services offered by techvestors?</t>
            <last>
              <ArrowDown />
            </last>
          </div>
          {showans[2] && (
            <div className="answer" style={{ display: ans }}>
              At <strong>techvestors</strong>, we offer a wide range of services
              including app development, web development, automation, social
              media marketing, CRM solutions, digital marketing, and website
              hosting. However, as each project is unique and requires different
              levels of complexity, the rates for our services may vary. We
              provide customized solutions tailored to your specific
              requirements, ensuring the best value for your investment. Contact
              us today for a personalized quote and let us help you achieve your
              business goals with our expertise in cutting-edge technologies.
            </div>
          )}
        </div>
        <div class="toggle-container">
          <div class="question" style={{ borderBottom: "1.5px solid rgb(91, 98, 91)"}} onClick={() => toggleAnswer(3)}>
            <t>What are the benefits of working with techvestors?</t>
            <last>
              <ArrowDown />
            </last>
          </div>
          {showans[3] && (
            <div className="answer" style={{border:"none",borderBottom:"1.5px solid rgb(91, 98, 91)"}}>
              <strong>techvestors</strong> offers a wide range of services
              including app development, web development, automation, social
              media marketing, CRM solutions, digital marketing, and website
              hosting in India. By partnering with us, you can expect expert
              solutions, innovative strategies, and exceptional customer
              support. Our team of experienced professionals utilizes
              cutting-edge technologies to deliver top-quality results, helping
              your business thrive in the digital landscape. With our services,
              you can achieve enhanced online presence, streamlined operations,
              increased customer engagement, and measurable business growth.
              Choose Techvestors for reliable, result-oriented, and customized
              digital solutions that drive success for your business.
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}
