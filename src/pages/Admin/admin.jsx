import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [proUrl, setProUrl] = useState("");
  const [proName, setProName] = useState("");
  const [proDes, setProDes] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proKategory, setProKategory] = useState("");
  const [proRating, setProRating] = useState("");

  async function getAdmin() {
    let newProduct = {
      id: Date.now(),
      image: proUrl,
      title: proName,
      description: proDes,
      price: proPrice,
      category: proKategory,
      rating: proRating,
      quantity: 1,
    };

    axios.post(
      `https://api-crud.elcho.dev/api/v1/f2073-3a725-0a2d9/organick`,
      newProduct
    );
    setProUrl("");
    setProName("");
    setProDes("");
    setProPrice("");
    setProKategory("");
    setProRating("");
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--block1">
            <input
              type="text"
              placeholder="product url"
              onChange={(e) => setProUrl(e.target.value)}
              value={proUrl}
            />
            <input
              type="text"
              placeholder="product name"
              onChange={(e) => setProName(e.target.value)}
              value={proName}
            />
            <input
              type="text"
              placeholder="product des"
              onChange={(e) => setProDes(e.target.value)}
              value={proDes}
            />
          </div>
          <div className="admin--block2">
            <input
              type="text"
              placeholder="product price"
              onChange={(e) => setProPrice(e.target.value)}
              value={proPrice}
            />
            <input
              type="text"
              placeholder="product rating"
              onChange={(e) => setProRating(e.target.value)}
              value={proRating}
            />
            <select onChange={(e) => setProKategory(e.target.value)}>
              <option value="">Category</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fresh">Fresh</option>
              <option value="Millets">Millets</option>
              <option value="Nuts">Nuts</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <button onClick={() => getAdmin()}>save</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
