import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner1 from "../../assets/images/detailBanner.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Product from "../../ui/Product/product";
import loading from "../../assets/images/loading.svg";
import NewImg from "../../assets/images/NewImg.png";

const Details = () => {
  const { Id } = useParams();
  const [details, setDetails] = useState();
  const [category, setCategory] = useState([]);

  async function getShop() {
    let res = await axios(
      `https://6808b873942707d722df6f9b.mockapi.io/api/v1/organick`
    );
    let { data } = res;
    let result = data.find((el) => el.id == Id);
    setCategory(data);
    setDetails(result);
  }
 

  useEffect(() => {
    getShop();
  }, []);

  if (!details)
    return (
      <center>
        <div>
          <img src={loading} alt="" />
        </div>
      </center>
    );

  return (
    <div id="details">
      <div
        className="details--banner"
        style={{
          background: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <center>
          <h1>Shop Single</h1>
        </center>
      </div>
      <div className="container">
        <div className="details">
          <div className="details--product">
            <div className="details--product__cardImg">
              <button>{details.category}</button>
              <img
                src={details.image}
                alt="img"
                style={{
                  width: "clamp(5rem, 25vw, 30rem)",
                }}
              />
            </div>

            <div className="details--product__cardText">
              <h2>{details.title}</h2>
              <h4> {"★".repeat(details.rating)}</h4>
              <h3>${details.price}</h3>
              <p>{details.description}</p>
              <div className="details--product__cardText--count">
                <h1>Quantity :</h1>
                <button className="btn1">1</button>
                <button className="add">
                  Add To Cart <FaCircleArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="details--buttonsText">
            <div className="details--buttonsText__btnText">
              <button className="btn1">Product Description</button>
              <button className="btn2">Additional Info</button>
            </div>
            <p>
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,{" "}
              <br />
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple <br /> sugars — such as glucose and fructose — make
              up 70% and 80% of the carbs in raw.
            </p>
          </div>
          <div className="details--Related">
            {category.map(
              (el) =>
                el.category === details.category && <Product product={el} />
            )}
          </div>
          <br />
          <br />
          <br />
          <div
            className="details--block6"
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

export default Details;
