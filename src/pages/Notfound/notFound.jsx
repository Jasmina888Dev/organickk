import React from "react";
import notFound from "../../assets/images/notFound.png";
import not404 from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div
      id="notFound"
      style={{
        backgroundImage: `url(${notFound})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: "0 auto",
      }}
    >
      <div className="container">
        <div className="notFound">
          <img src={not404} alt="404" width={400} />
          <h1>Page not found</h1>
          <p>The page you are looking for doesn't exist or has been moved</p>
          <button onClick={() => nav("/")}>
            Go to Homepage{" "}
            <span>
              {" "}
              <IoMdArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
