import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/context";
import Product from "../../ui/Product/product";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useContext(ProductContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="category">
      <div className="container">
        <div className="category">
          <h1>Category/{categoryId}</h1>

          <div className="category--block">
            {products.map((el) => {
              return el.category === categoryId ? (
                <Product product={el} key={el._id} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
