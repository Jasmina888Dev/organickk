import React from "react";
import logo from "../../assets/images/Logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--left">
            <h1>Contact Us</h1>
            <h3>Email</h3>
            <h4>needhelp@Organia.com</h4>
            <h3>Phone</h3>
            <h4>666 888 888</h4>
            <h3>Address</h3>
            <h4>88 road, borklyn street, USA</h4>
          </div>
          <div className="footer--line"></div>
          <div className="footer--center">
            <img src={logo} alt="img" />
            <p>
              Simply dummy text of the printing and typesetting industry. <br />{" "}
              Lorem Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="footer--center__icons">
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="footer--line"></div>
          <div className="footer--right">
            <h1>Utility Pages</h1>
            <h4>Style Guide</h4>
            <h4>404 Not Found</h4>
            <h4>Password Protected</h4>
            <h4>Licences </h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
