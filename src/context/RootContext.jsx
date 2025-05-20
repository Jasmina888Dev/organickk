import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context";
import axios from "axios";

const RooteContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  async function getShop() {
    let res = await axios(
      `https://6808b873942707d722df6f9b.mockapi.io/api/v1/organick`
    );
    let { data } = res;
    setProducts(data);
  }

  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  }

  useEffect(() => {
    getShop();
    getBasket();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        setBasket,
        basket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RooteContext;
