import React, { useEffect, useState } from "react";
import banner2 from "../../assets/images/Banner2.png";
import Product from "../../ui/Product/product";
import axios from "axios";
import NewImg from "../../assets/images/NewImg.png";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(4)

  async function getShop() {
    let res = await axios(
      `https://6808b873942707d722df6f9b.mockapi.io/api/v1/organick`
    );
    let { data } = res;
    setProduct(data);
    console.log(product, "jasi");
  }

  useEffect(() => {
    getShop();
  }, []);

  return (
    <div id="shop">
      <div
        className="shop--bg"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container">
        <div className="shop">
          <div className="shop--block1">
            {product.slice(0, count).map((el) => (
              <Product product={el} />
            ))}
            <h6 onClick={() => setCount(count+4)}>click me</h6>
          </div>

          <div
            className="shop--block"
            style={{
              backgroundImage: `url(${NewImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginBottom: "50px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
