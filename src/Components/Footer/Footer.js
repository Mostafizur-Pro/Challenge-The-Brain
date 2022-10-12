import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="position">
      <div className="footer">
        <div>
          <h3>Challenge The Brain</h3>
        </div>
        <div>
          <h4>PRODUCT</h4>
          <p>Features</p>
          <p>Integrations</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>
        <div>
          <h4>COMPANY</h4>
          <p>Privacy</p>
          <p>Terms of Service</p>
        </div>
        <div>
          <h4>DEVELOPERS</h4>
          <p>Public API</p>
          <p>Documentation</p>
        </div>
        <div>
          <h4>SOCIAL MEDIA</h4>
          <div className="fontIcon">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
      <hr />
      <p>©2022-2023 Challenge The Brain. All rights reserved.</p>
    </div>
  );
};

export default Footer;
