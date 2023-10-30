// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider, createBrowserRouter , createHashRouter } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
// import Home from './Component/Home/Home';
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Client from "./Component/Client/Client";
import Events from "./Component/Events/Events";
import Profolio from "./Component/Profolio/Profolio";
import Backedges from "./Component/Backedges/Backedges";
import Blog from "./Component/Blog/Blog";
import Contect from "./Component/Contect/Contect";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Search from "./Component/Search/Search";
import AboutUs from "./Component/AboutUs/AboutUs";
import Backone from "./Component/Back-one/Back-one";
import Backtwo from "./Component/Back-two/Back-two";
import Backthree from "./Component/Back-three/Back-three";
import Backfour from "./Component/Back-four/Back-four";
import CartProvider from "./Context/CartStore";
import Cart from "./Component/Cart/Cart";
import Pay from "./Component/Pay/Pay";

function App() {
  let Mo = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "Services", element: <Services /> },
        { path: "Client", element: <Client /> },
        { path: "Events", element: <Events /> },
        { path: "Profolio", element: <Profolio /> },
        {
          path: "Backedges",
          element: <Backedges />,
          children: [
            { path: "flagback", element: <Backtwo /> },
            { path: "mediaback", element: <Backone /> },
            { path: "webback", element: <Backthree /> },
            { path: "fileback", element: <Backfour /> },
          ],
        },
        { path: "Blog", element: <Blog /> },
        { path: "Contect us", element: <Contect /> },
        { path: "register", element: <Register /> },
        { path: "aboutUs", element: <AboutUs /> },
        { path: "login", element: <Login /> },
        { path: "search", element: <Search /> },
        {
          path: "card",element: <Cart />,children: [
            { path: "paypal", element: <Pay/> }
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <CartProvider>
        <RouterProvider router={Mo} />
      </CartProvider>
    </>
  );
}

export default App;
