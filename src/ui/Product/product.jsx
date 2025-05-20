import React, { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";
import { AiOutlineMinusCircle } from "react-icons/ai";
import CountUp from "react-countup";

const Product = ({ product }) => {
  const { basket, setBasket } = useContext(ProductContext);

  let someBasket = basket.some((item) => item.id === product.id);

  function addtoBasket(item) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    const isExist = data.some((el) => el.id === item.id);
    if (!isExist) {
      let newData = [...data, item];
      localStorage.setItem("basket", JSON.stringify(newData));
      setBasket(newData);
    }
  }

  function delBasket(id) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    let newData = data.filter((el) => el.id !== id);
    localStorage.setItem("basket", JSON.stringify(newData));
    setBasket(newData);
  }

  return (
    <div id="">
      <div className="product">
        <div className="product--card">
          <div className="product--card__block" key={product.id}>
            <h5
              onClick={() => {
                someBasket ? delBasket(product.id) : addtoBasket(product);
              }}
            >
              {someBasket ? <AiOutlineMinusCircle /> : <IoAddCircleOutline />}
            </h5>
            <button>{product.category}</button>
            <Link to={`/details/${product.id}`}>
              <img
                src={product.image}
                alt="img"
                style={{
                  width: "clamp(4rem, 10vw, 20rem)",
                  margin:
                    "0 clamp(0.1rem, 1vw, 10rem) 0  clamp(0.1rem, 1.5vw, 10rem)",
                }}
              />
            </Link>
            <h2>{product.title}</h2>
            <hr />
            <div className="product--card__block--text">
              <div className="price">
                <CountUp
                  start={0}
                  end={product.price}
                  duration={2.55}
                  separator=" "
                  decimals={0}
                  decimal=" "
                />
              </div>
              <h4> {"★".repeat(product.rating)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
