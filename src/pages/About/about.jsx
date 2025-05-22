import React, { useEffect } from "react";
import banner from "../../assets/images/Banner.png";
import image from "../../assets/images/Image1.png";
import AboutUs from "../../assets/images/AboutUs.svg";
import icon1 from "../../assets/images/Icon1.svg";
import icon2 from "../../assets/images/Icon2.svg";
import image4 from "../../assets/images/Image4.png";
import { GoArrowRight } from "react-icons/go";
import why from "../../assets/images/Why.svg";
import { FaFacebook, FaRegCircle, FaTwitter } from "react-icons/fa";
import icon3 from "../../assets/images/Icon3.svg";
import team from "../../assets/images/Team.svg";
import person from "../../assets/images/person1.png";
import about from "../../assets/images/AboutImg.svg";
import cardImg1 from "../../assets/images/cardImg1.png";
import cardImg2 from "../../assets/images/cardImg2.png";
import cardImg3 from "../../assets/images/cardImg3.png";
import cardImg4 from "../../assets/images/cardImg4.png";
import NewImg from "../../assets/images/NewImg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div id="about">
      <div
        className="about--bg"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container">
        <div className="about">
          <div className="about--block1">
            <img
              src={image}
              alt="img"
              data-aos="fade-right"
              style={{
                width: "clamp(10rem, 45vw, 80rem)",
              }}
            />
            <div className="about--block1__text">
              <img
                src={AboutUs}
                alt="img"
                style={{
                  width: "clamp(3rem, 10vw, 50rem)",
                }}
              />
              <h1>
                We do Creative <br />
                Things for Success
              </h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard dummy
                text ever since the 1500s, when an <br /> unknown printer took a
                galley. <br />
                <br /> Simply dummy text of the printing and typesetting
                industry. Lorem had ceased <br /> to been the industry's
                standard dummy text ever since the 1500s, when an <br />
                unknown printer took a galley.
              </p>
              <div className="about--block1__text--card">
                <h5>
                  <img
                    src={icon1}
                    alt="img"
                    style={{
                      width: "clamp(1rem, 4vw, 30rem)",
                    }}
                  />
                  <span>
                    Modern Agriculture <br /> Equipment
                  </span>
                </h5>
                <h5>
                  <img
                    src={icon2}
                    alt="img"
                    style={{
                      width: "clamp(1rem, 4vw, 30rem)",
                    }}
                  />
                  <span>
                    No growth <br /> hormones are used
                  </span>
                </h5>
              </div>
              <button>
                Explore More <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="about--block23">
            <div className="about--block23__block2">
              <div className="about--block23__block2--text">
                <img
                  src={why}
                  alt="img"
                  style={{
                    width: "clamp(4rem, 15vw, 70rem)",
                  }}
                />
                <h1>
                  We do not buy from the <br /> open market & traders.
                </h1>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased <br /> to been the industry's standard the
                  1500s, when an unknown
                </p>
                <button>
                  {" "}
                  <FaRegCircle />
                  100% Natural Product
                </button>
                <h6>
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry Lorem Ipsum
                </h6>
                <button>
                  {" "}
                  <FaRegCircle />
                  100% Natural Product
                </button>
                <h6>
                  Filling, and temptingly healthy, our Biona Organic <br />{" "}
                  Granola with Wild Berries is just the thing
                </h6>
              </div>
              <img
                src={image4}
                alt="img"
                data-aos="fade-left"
                style={{
                  width: "clamp(7rem, 32vw, 40rem)",
                }}
              />
            </div>

            <div className="about--block23__block3">
              <div className="about--block23__block3--card3">
                <img
                  src={icon3}
                  alt="img"
                  style={{
                    width: "clamp(1rem, 5vw, 30rem)",
                  }}
                />
                <h2>Return Policy</h2>
                <p>
                  Simply dummy text of <br /> the printintypesetting <br />{" "}
                  industry.
                </p>
              </div>
              <div className="about--block23__block3--card3">
                <img
                  src={icon3}
                  alt="img"
                  style={{
                    width: "clamp(1rem, 5vw, 30rem)",
                  }}
                />
                <h2>Return Policy</h2>
                <p>
                  Simply dummy text of <br /> the printintypesetting <br />{" "}
                  industry.
                </p>
              </div>
              <div className="about--block23__block3--card3">
                <img
                  src={icon3}
                  alt="img"
                  style={{
                    width: "clamp(1rem, 5vw, 30rem)",
                  }}
                />
                <h2>Return Policy</h2>
                <p>
                  Simply dummy text of <br /> the printintypesetting <br />{" "}
                  industry.
                </p>
              </div>
              <div className="about--block23__block3--card3">
                <img
                  src={icon3}
                  alt="img"
                  style={{
                    width: "clamp(1rem, 5vw, 30rem)",
                  }}
                />
                <h2>Return Policy</h2>
                <p>
                  Simply dummy text of <br /> the printintypesetting <br />{" "}
                  industry.
                </p>
              </div>
            </div>
          </div>

          <div className="about--block4">
            <img
              src={team}
              alt=""
              style={{
                width: "clamp(2rem, 6vw, 20rem)",
              }}
            />
            <h1>Our Organic Experts</h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's <br /> standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="about--block4__cards">
              <div className="about--block4__cards--card1">
                <img
                  src={person}
                  alt="img"
                  style={{
                    width: "clamp(4rem, 25vw, 80rem)",
                  }}
                />
                <h2>Giovani Bacardo</h2>
                <div className="about--block4__cards--card1__text">
                  <img
                    src={team}
                    alt="img"
                    style={{
                      width: "clamp(1.5rem, 4vw, 20rem)",
                    }}
                  />
                  <h4>
                    <FaFacebook />
                    <span>
                      <FaTwitter />
                    </span>
                  </h4>
                </div>
              </div>
              <div className="about--block4__cards--card1">
                <img
                  src={person}
                  alt="img"
                  style={{
                    width: "clamp(4rem, 25vw, 80rem)",
                  }}
                />
                <h2>Giovani Bacardo</h2>
                <div className="about--block4__cards--card1__text">
                  <img
                    src={team}
                    alt="img"
                    style={{
                      width: "clamp(1.5rem, 4vw, 20rem)",
                    }}
                  />
                  <h4>
                    <FaFacebook />
                    <span>
                      <FaTwitter />
                    </span>
                  </h4>
                </div>
              </div>
              <div className="about--block4__cards--card1">
                <img
                  src={person}
                  alt="img"
                  style={{
                    width: "clamp(4rem, 25vw, 80rem)",
                  }}
                />
                <h2>Giovani Bacardo</h2>
                <div className="about--block4__cards--card1__text">
                  <img
                    src={team}
                    alt="img"
                    style={{
                      width: "clamp(1.5rem, 4vw, 20rem)",
                    }}
                  />
                  <h4>
                    <FaFacebook />
                    <span>
                      <FaTwitter />
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="about--block5">
            <img
              src={about}
              alt="img"
              style={{
                width: "clamp(2rem, 6vw, 20rem)",
              }}
            />
            <h1>What We Offer for You</h1>
            <div className="about--block5__card">
              <div className="about--block5__card--card1">
                <img
                  src={cardImg1}
                  alt=""
                  style={{
                    width: "clamp(2rem, 15vw, 20rem)",
                  }}
                />
                <h5>Spicy</h5>
              </div>
              <div className="about--block5__card--card1">
                <img
                  src={cardImg2}
                  alt=""
                  style={{
                    width: "clamp(2rem, 15vw, 20rem)",
                  }}
                />
                <h5>Nuts & Feesd</h5>
              </div>
              <div className="about--block5__card--card1">
                <img
                  src={cardImg3}
                  alt=""
                  style={{
                    width: "clamp(2rem, 15vw, 20rem)",
                  }}
                />
                <h5>Fruits</h5>
              </div>
              <div className="about--block5__card--card1">
                <img
                  src={cardImg4}
                  alt=""
                  style={{
                    width: "clamp(2rem, 15vw, 20rem)",
                    height: "clamp(2rem, 18vw, 20rem)",
                    objectFit: "contain",
                  }}
                />
                <h5>Vegetable</h5>
              </div>
            </div>
          </div>

          <div
            className="about--block6"
            data-aos="fade-up"
            data-aos-duration="3000"
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
    </div>
  );
};

export default About;
