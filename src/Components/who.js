import React from "react";
import { Box } from "@mui/material";
import whoimg from "./who.png";
import "./Styles/who.css";
import "./Styles/utils.css"; 

export default function Who() {
  return (
    <Box className="container who section">
      <div>
        <div className="whitetext">WHO</div>
        <div className="text-subtitle">We Invest</div>
      </div>
      <div className="parent">
      <img className="whoimg"
          src={whoimg}
         alt=""
        />
      <div className="flex-container">
          <p className="list-item">We cater to a diverse range of customers, including:</p>
          <div>
            <li className="list-item">
              <span className="strong ">Entrepreneurs:</span> Whether
              you're just starting out or have an established business, we
              provide services to help you grow your online presence and achieve
              your goals.
            </li>
            <li className="list-item">
              <span className="strong ">Small Businesses:</span> We
              understand the unique needs of small businesses and offer
              affordable solutions to help you establish and maintain your
              online presence.
            </li>
            <li className="list-item">
              <span className="strong ">Medium Businesses:</span> For
              medium-sized businesses looking to scale their operations, we
              provide reliable and scalable services to meet your growing needs.
            </li>
            <li className="list-item">
              <span className="strong ">Anybody with an idea:</span>
              If you have an idea for a website or online project, we can help
              you turn it into a reality with our expert services and support.
            </li>
          </div>
          <p className="list-item">
            No matter who you are or what your needs are, we are here to help
            you succeed online. Contact us today to learn more about how we can
            help you achieve your goals.
          </p>
          </div>
      </div>

    </Box>
  );
}
