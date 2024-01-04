// Import necessary stylesheets or add the styles directly in your existing stylesheet

import React from "react";
import { Box ,Button} from "@mui/material";
import { useState, useEffect } from "react";
import "./Styles/what.css";
import testImage from "../Components/test.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function What() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => (prevTab % 7) + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  
    // Add class to the active tab label
    const labels = document.querySelectorAll(".tabs__label");
    labels.forEach((label, index) => {
      if (index + 1 === tabNumber) {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    });
  };
  
  const handlePrevTab = () => {
    setActiveTab((prevTab) => ((prevTab - 2 + 7) % 7) + 1);
  };
  

  const handleNextTab = () => {
    setActiveTab((prevTab) => (prevTab % 7) + 1);
  };

  

  return (
    <Box className="What">
      <div>
        <div className="whitetext">WHAT</div>
        <div className="text-subtitle">We Invest</div>
      </div>
     
      <div className="tabs">
        <div className="tabs__arrows"></div>
        <div className="tabs__labels">
          {[1, 2, 3, 4, 5, 6, 7].map((tabNumber) => (
            <React.Fragment key={tabNumber}>
              <input
                type="radio"
                className="tabs__radio"
                name="tabs-example"
                id={`tab${tabNumber}`}
                checked={activeTab === tabNumber}
                onChange={() => handleTabChange(tabNumber)}
              />

              <label htmlFor={`tab${tabNumber}`} className="tabs__label">
                {tabNumber === 1 && "Develop Apps easily"}
                {tabNumber === 2 && "Web Services"}
                {tabNumber === 3 && "Automate Things"}
                {tabNumber === 4 && "Social Media Marketing"}
                {tabNumber === 5 && "CRM Solutions"}
                {tabNumber === 6 && "Marketing made easy"}
                {tabNumber === 7 && "Hosting"}
              </label>
            </React.Fragment>
          ))}
        </div>
        <div className="tabs__arrows"></div>
      </div>
      <div className="arrows">
        <button className="left_arrow" onClick={handlePrevTab}>
         <ArrowBackIosNewIcon className="Arrow_icon" fontSize="20px"/>
        </button>
        <div className="tabs__content">
          {[1, 2, 3, 4, 5, 6, 7].map((tabNumber) => (
            <div
              key={tabNumber}
              className={`tab-content ${
                activeTab === tabNumber ? "active" : ""
              }`}
            >
              {tabNumber === 1 && (
             <div className="content-img">
             <img className="What-img" src={testImage} alt="Develop Apps easily" />
             
             <p>
             <strong>Develop Apps easily</strong><br/>
             Bring your app ideas to life with ease! Our mobile app
             development service offers top-notch quality and seamless user
             experience. Get started today!
             <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
           </div>
              )}
              {tabNumber === 2 && (
             <div className="content-img">
             <img className="What-img" src={testImage} alt="Develop Apps easily" />
             
             <p>
             <strong>Develop Apps easily</strong><br/>
             Bring your app ideas to life with ease! Our mobile app
             development service offers top-notch quality and seamless user
             experience. Get started today!
             <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
           </div>
              )}
              {tabNumber === 3 && (
             <div className="content-img">
             <img className="What-img" src={testImage} alt="Develop Apps easily" />
             
             <p>
             <strong>Develop Apps easily</strong><br/>
             Bring your app ideas to life with ease! Our mobile app
             development service offers top-notch quality and seamless user
             experience. Get started today!
             <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
           </div>
              )}
              {tabNumber === 4 && (
        <div className="content-img">
        <img className="What-img" src={testImage} alt="Develop Apps easily" />
        
        <p>
        <strong>Develop Apps easily</strong><br/>
        Bring your app ideas to life with ease! Our mobile app
        development service offers top-notch quality and seamless user
        experience. Get started today!
        <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
      </div>
              )}
              {tabNumber === 5 && (
           <div className="content-img">
           <img className="What-img" src={testImage} alt="Develop Apps easily" />
           
           <p>
           <strong>Develop Apps easily</strong><br/>
           Bring your app ideas to life with ease! Our mobile app
           development service offers top-notch quality and seamless user
           experience. Get started today!
           <Button className="btns" variant="contained" >Enquire Now</Button>
           
           </p>
         </div>
              )}
              {tabNumber === 6 && (
            <div className="content-img">
            <img className="What-img" src={testImage} alt="Develop Apps easily" />
            
            <p>
            <strong>Develop Apps easily</strong><br/>
            Bring your app ideas to life with ease! Our mobile app
            development service offers top-notch quality and seamless user
            experience. Get started today!
            <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
          </div>
              )}
              {tabNumber === 7 && (
                <div className="content-img">
                <img className="What-img" src={testImage} alt="Develop Apps easily" />
                
                <p>
                <strong>Develop Apps easily</strong><br/>
                Bring your app ideas to life with ease! Our mobile app
                development service offers top-notch quality and seamless user
                experience. Get started today!
                <Button className="btns" variant="contained" >Enquire Now</Button>
           </p>
              </div>
              )}
            </div>
          ))}
        </div>
        <button className="right_arrow" onClick={handleNextTab}>
          <ArrowForwardIosIcon className="Arrow_icon" fontSize="20px"/>
        </button>
      </div>
   
    </Box>
  );
}
