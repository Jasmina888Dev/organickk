import React, { useEffect, useState } from "react";
import Background from "../../assets/images/Background.png";
import mainBanner1 from "../../assets/images/mainBanner1.png";
import mainBanner2 from "../../assets/images/mainBanner2.png";
import mainImg from "../../assets/images/mainImg.png";
import { GoArrowRight } from "react-icons/go";
import aboutUs from "../../assets/images/AboutUs.svg";
import icon1 from "../../assets/images/Icon1.svg";
import icon2 from "../../assets/images/Icon2.svg";
import icon4 from "../../assets/images/Icon4.svg";
import Product from "../../ui/Product/product";
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import BackgroundMain from "../../assets/images/BackgroundMain.png";
import icon6 from "../../assets/images/icon6.svg";
import icon8 from "../../assets/images/icon8.svg";
import userPhoto from "../../assets/images/Photo.jpg";
import icon7 from "../../assets/images/Icon7.svg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Photo2 from "../../assets/images/Photo2.jpg";
import bag1 from "../../assets/images/1.jpg";
import bag2 from "../../assets/images/2.png";
import bag3 from "../../assets/images/3.jpg";
import Group from "../../assets/images/Group.png";
import icon9 from "../../assets/images/Icon9.svg";
import icon10 from "../../assets/images/Icon10.png";
import PhotoGreen from "../../assets/images/PhotoGreen.png";
import PhotoRed from "../../assets/images/PhotoRed.png";
import newPhoto from "../../assets/images/NewImg.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [count, setCount] = useState(4);
  const [count1, setCount1] = useState(4);
  const [product, setProduct] = useState([]);

  async function getShop() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/f2073-3a725-0a2d9/organick`
    );
    let { data } = res.data;
    setProduct(data);
  }

  const allCategories = [
    {
      id: 1,
      title: "Vegetable",
      img: "https://img.pikbest.com/png-images/20240830/3d-vegetables-a-clean-and-modern-presentation_10777794.png!bw700",
    },
    {
      id: 2,
      title: "Fresh",
      img: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-3d-fruit-fresh-png-image_14591543.png",
    },
    {
      id: 3,
      title: "Nuts",
      img: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-3d-a-mixed-nuts-displayon-realistic-png-image_15887028.png",
    },
    {
      id: 4,
      title: "Health",
      img: "https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-buckwheat-png-image_14647414.png",
    },
  ];

  useEffect(() => {
    getShop();
    window.scroll(0, 0);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div id="main">
      <div
        className="main--bg"
        style={{
          backgroundImage: `url(${Group})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <img src={icon9} alt="" />
          <h2>
            Choose the best <br /> healthier way <br /> of life
          </h2>
          <button>
            Explore Now <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="mainBanner">
          <img src={mainBanner1} alt="img" data-aos="fade-right" />
          <img src={mainBanner2} alt="img" data-aos="fade-left" />
        </div>
        <div className="main">
          <div className="main--block1">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={mainImg}
              alt="img"
              style={{
                width: "clamp(10rem, 50vw, 80rem)",
              }}
            />
            <div className="main--block1__text">
              <img
                src={aboutUs}
                alt="img"
                style={{
                  width: "clamp(3rem, 10vw, 50rem)",
                }}
              />
              <h1>
                We do Creative <br />
                Things for Success
              </h1>
              <p
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard dummy
                text ever since the 1500s, when an <br /> unknown printer took a
                galley. <br />
                <br /> Simply dummy text of the printing and typesetting
                industry. Lorem had ceased <br /> to been the industry's
                standard dummy text ever since the 1500s, when an <br />
                unknown printer took a galley.
              </p>
              <div className="main--block1__text--card">
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

          <div className="main--blockCategories">
            <h1>Categories</h1>
            <div className="main--blockCategories__card">
              {allCategories.map((el) => (
                <div
                  className="main--blockCategories__card--text"
                  data-aos="zoom-in-down"
                >
                  <Link to={`/category/${el.title}`}>
                    <img src={el.img} alt="img" />
                  </Link>
                  <h2>{el.title}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="main--block2">
            <img
              src={icon4}
              alt="img"
              style={{
                width: "clamp(3rem, 10vw, 50rem)",
              }}
            />
            <h1>Our Products</h1>

            <div className="main--block2__cards">
              {product.slice(0, count).map((el) => (
                <Product product={el} key={el.id} />
              ))}
            </div>

            <div className="btn">
              <button onClick={() => setCount(count + 4)}>
                Load More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main--block3"
        style={{
          backgroundImage: `url(${BackgroundMain})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="main--block3__cards">
            <img
              src={icon6}
              alt="img"
              style={{
                width: "clamp(0.8rem, 1vw, 9rem)",
              }}
            />
            <h1>What Our Customer Saying?</h1>
            <div className="rating">
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
            </div>
            <img
              src={userPhoto}
              alt="User Photo"
              style={{
                borderRadius: "60%",
                width: "clamp(2rem, 8vw, 15rem)",
                height: "clamp(2rem, 8vw, 15rem)",
                objectFit: "contain",
                margin: " clamp(0.5rem, 0.8vw, 9rem) 0",
              }}
            />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy <br /> text of the printing and typesetting
              industry.
            </p>
            <h4>Sara Taylor</h4>
            <p className="consumer">Consumer</p>
            <div className="divider">
              <h3>&#x2022;</h3>
              <h3>&#x2022;</h3>
              <h3>&#x2022;</h3>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">100%</div>
                Organic
              </div>
              <div className="stat">
                <div className="stat-number">285</div>
                Active Product
              </div>
              <div className="stat">
                <div className="stat-number">350+</div>
                Organic Orchards
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                Years of Farming
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main--block4">
        <div className="container">
          <div className="main--block4__title">
            <h1>
              <img
                src={icon7}
                alt=""
                style={{
                  width: "clamp(1rem, 6vw, 50rem)",
                }}
              />
              <br />
              <span> We Offer Organic For You</span>
            </h1>
            <button onClick={() => setCount1(count1 + 4)}>
              View All Product <FaCircleArrowRight />
            </button>
          </div>
          <div className="main--block4__text25">
            {product
              .slice(0, count1)
              .map((el) =>
                el.rating >= 4 ? <Product product={el} key={el.id} /> : null
              )}
          </div>
        </div>
      </div>

      <div className="main--block5">
        <img
          src={Photo2}
          alt="img"
          style={{
            width: "clamp(20rem, 50vw, 90rem)",
          }}
        />
        <div
          className="main--block5__store"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="4000"
          data-aos-duration="4000"
        >
          <img
            src={icon8}
            alt="img"
            style={{
              width: "clamp(2rem, 8vw, 9rem)",
            }}
          />
          <h1>
            Econis is a Friendly <br /> Organic Store
          </h1>
          <h4>
            <span>Start with Our Company First</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </h4>
          <h4>
            <span>Learn How to Grow Yourself</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium br doloremque laudantium. Sed ut perspiciatis.
          </h4>
          <h4>
            <span>Farming Strategies of Today</span> <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </h4>
        </div>
      </div>

      <div className="main--block6">
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Organic Juice</button>
        </div>
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Organic Food</button>
        </div>
        <div
          className="main--block6__cards1"
          style={{
            backgroundImage: `url(${bag3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "clamp(10rem, 35vw, 40rem)",
          }}
        >
          <button>Nuts Cookis</button>
        </div>
      </div>

      <div className="container">
        <div className="main--block7">
          <div className="main--block7__text">
            <h2>
              <img
                src={icon10}
                alt="img"
                style={{
                  width: "clamp(2rem, 7vw, 50rem)",
                }}
              />
              <span>
                Discover weekly content about <br /> organic food, & more
              </span>
            </h2>
            <button>
              More News <FaCircleArrowRight />
            </button>
          </div>

          <div className="main--block7__cards">
            <div
              className="main--block7__cards--card1"
              style={{
                backgroundImage: `url(${PhotoGreen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="main--block7__cards--card1__btn25">
                <button>
                  25 <br /> Nov
                </button>
              </div>
              <div
                className="main--block7__cards--card1__cirkle"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="8000"
              >
                <h4>
                  <FaUserAlt />
                  <span> By Rachi Card</span>
                </h4>
                <h2>
                  The Benefits of Vitamin D & How to Get It <br />
                  <span>
                    {" "}
                    Simply dummy text of the printing and typesetting <br />{" "}
                    industry. Lorem Ipsum
                  </span>
                </h2>
                <button>
                  Read More <FaCircleArrowRight />
                </button>
              </div>
            </div>
            <div
              className="main--block7__cards--card1"
              style={{
                backgroundImage: `url(${PhotoRed})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="main--block7__cards--card1__btn25">
                <button>
                  25 <br /> Nov
                </button>
              </div>
              <div
                className="main--block7__cards--card1__cirkle"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="8000"
              >
                <h4>
                  <FaUserAlt />
                  <span> By Rachi Card</span>
                </h4>
                <h2>
                  The Benefits of Vitamin D & How to Get It <br />
                  <span>
                    {" "}
                    Simply dummy text of the printing and typesetting <br />{" "}
                    industry. Lorem Ipsum
                  </span>
                </h2>
                <button>
                  Read More <FaCircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="main--block8"
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{
            backgroundImage: `url(${newPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "0 auto",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Main;
