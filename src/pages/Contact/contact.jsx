import React, { useState } from "react";
import contactBanner from "../../assets/images/contactBanner.png";
import contact1 from "../../assets/images/contact1.jpg";
import contact2 from "../../assets/images/contact2.png";
import contact3 from "../../assets/images/contact3.svg";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import NewImg from "../../assets/images/NewImg.png";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubjrct] = useState("");
  const [massege, setMessage] = useState("");

  function productSubmit() {
    const my_id = `-1002412676149`;
    const token = `7817004799:AAGp9DB2ywL_96_XqKMGqzlQ_RTwdPvQWl8`;
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    if (!name || !email || !company || !subject || !massege 
    ) {
      toast.error("🦄 Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

   else {
    const userData = {
      chat_id: my_id,
      parse_model: "html",
      text: ` Заказ: \n
      Full Name: ${name}
      Your Email: ${email}
      Company: ${company}
      Subject: ${subject}
      Message: ${massege}
      `,
    }; 

    axios.post(api_key, userData);

    setName("");
    setEmail("");
    setCompany("");
    setSubjrct("");
    setMessage("");
    sacMesage()
   }
  }

  const sacMesage = () => {
    toast.success("🦄 Успешно!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // 7817004799:AAGp9DB2ywL_96_XqKMGqzlQ_RTwdPvQWl8
  return (
    <div id="contact">
      <div
        className="contact--bg"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container">
        <div className="contact">
          <div className="contact--block1">
            <img src={contact1} alt="img" width={470} />
            <div className="contact--block1__text">
              <h1>
                We'd love to talk about how we <br /> can work together.
              </h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to <br /> been the industry's standard dummy
                text ever since the 1500s, when an unknown <br /> printer took a
                galley.
              </p>
              <div className="contact--block1__text--card">
                <a href="#">
                  <MdEmail />
                </a>
                <h2>
                  Massege <br /> <span>support@organic.com</span>
                </h2>
              </div>

              <div className="contact--block1__text--card">
                <a href="#">
                  <FaPhoneAlt />
                </a>
                <h2>
                  Massege <br /> <span>support@organic.com</span>
                </h2>
              </div>

              <div className="contact--block1__text--icon">
                <h3>
                  <FaInstagram />
                </h3>
                <h3>
                  <FaFacebook />
                </h3>
                <h3>
                  <FaTwitter />
                </h3>
                <h3>
                  <FaPinterest />
                </h3>
              </div>
            </div>
          </div>

          <div
            className="contact--block2"
            style={{
              backgroundImage: `url(${contact2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="contact--block2__text">
              <img src={contact3} alt="img" />
              <h1>Our Farms</h1>
              <p>
                Established fact that a reader will be distracted <br /> by the
                readable content of a page when looking <br /> a layout. The
                point of using.
              </p>
              <div className="contact--block2__text--card">
                <h3>
                  <CiLocationOn />
                </h3>
                <h4>
                  New York, USA: <br />{" "}
                  <span>
                    299 Park Avenue New York, New York <br /> 10171
                  </span>
                </h4>
              </div>
              <div className="contact--block2__text--card">
                <h3>
                  <CiLocationOn />
                </h3>
                <h4>
                  New York, USA: <br />{" "}
                  <span>
                    299 Park Avenue New York, New York <br /> 10171
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="contact--block3">
            <div className="contact--block3__card1">
              <div className="contact--block3__card1--input">
                <h1>Full Name*</h1>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="contact--block3__card1--input">
                <h1>Your Email*</h1>
                <input
                  type="text"
                  placeholder="example@yourmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="contact--block3__card1">
              <div className="contact--block3__card1--input">
                <h1>Company*</h1>
                <input
                  type="text"
                  placeholder="yourcompany name here"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </div>
              <div className="contact--block3__card1--input">
                <h1>Subject*</h1>
                <input
                  type="text"
                  placeholder="how can we help"
                  onChange={(e) => setSubjrct(e.target.value)}
                  value={subject}
                />
              </div>
            </div>
            <div className="contact--block3__card2">
              <h1>Message*</h1>
              <input
                type="text"
                placeholder="hello there,i would like to talk about how to..."
                onChange={(e) => setMessage(e.target.value)}
                value={massege}
              />
            </div>
            <button onClick={() => productSubmit()}>Send Message</button>
          </div>

          <div
            className="contact--block6"
            style={{
              backgroundImage: `url(${NewImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "0 auto",
            }}
          ></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
