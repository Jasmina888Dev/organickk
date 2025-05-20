import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer/footer";
import Header from "./layout/Header/header";
import Admin from "./pages/Admin/admin";
import About from "./pages/About/about";
import Shop from "./pages/Shop/shop";
import Details from "./pages/Details/details";
import NotFound from "./pages/Notfound/notFound";
import Contact from "./pages/Contact/contact";
import Basket from "./pages/Basket/bakset";
import Category from "./pages/Category/category";
import Main from "./pages/Main/Main";

function App() {
  let route = [
    {
      id: 1,
      path: "/",
      element: <Main />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/about",
      element: <About />,
    },
    {
      id: 4,
      path: "/shop",
      element: <Shop />,
    },
    {
      id: 5,
      path: "/details/:Id",
      element: <Details />,
    },
    {
      id: 6,
      path: "/*",
      element: <NotFound />,
    },
    {
      id: 7,
      path: "/contact",
      element: <Contact />,
    },
    {
      id: 8,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 9,
      path: "/category/:categoryId",
      element: <Category />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
