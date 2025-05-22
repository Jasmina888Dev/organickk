import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context";
import axios from "axios";

const RooteContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  async function getShop() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/f2073-3a725-0a2d9/organick`
    );
    let { data } = res.data;
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
