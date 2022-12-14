import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/AboutPage/AboutPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PCForGame from "./pages/PCForGame/PCForGame";
import GamePC from "./pages/GamePC/GamePC"
import LowPriceComps from "./pages/LowPrieceComps/LowPriceComps";
import AboutUs from "./components/AboutUs/AboutUs";
import FaqMap from "./components/Faq/FaqMap";
import Comments from "./components/Comments/Comments";
import ConfiguratorPage from "./pages/ConfiguratorPage/ConfiguratorPage";
import ArrayDrop from "./components/ArrayDrop/ArrayDrop";
import Basket from "./pages/Basket/Basket";
import Powerfull from "./components/Powerfull/Powerfull"
import Admin from "./pages/AdminPage/Admin";
import { useSelector } from "react-redux";
import CompPage from "./pages/CompPage/CompPage";
import ContactPage from "./pages/ContactsPage/ContactPage";

const App = () => {
  
  const token = useSelector((state) => state.application.token);
  if (token) {
    return (
      <>
        <div className="main_route">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/basket" element={<Basket />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/powerfull" element={<Powerfull />} />
              <Route path="/configurator" element={<ConfiguratorPage />} />
              <Route path="/about" element={<About />}>
                <Route path="company" element={<AboutUs />} />
                <Route path="faq" element={<FaqMap />} />
                <Route path="comments" element={<Comments />} />
              </Route>
              <Route path="/game" element={<PCForGame />} />
              <Route path="/game/:id" element={<GamePC />} />
              <Route path="/lowprice" element={<LowPriceComps />} />
              <Route path="/lowprice/:id" element={<CompPage />} />
              <Route path="/:id" element={<CompPage />} />
              <Route path="/dr" element={<ArrayDrop />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contacts" element={<ContactPage />} />
            </Route>
            <Route path="/signin" element={<Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="main_route">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/basket" element={<Basket />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/powerfull" element={<Powerfull />} />
            <Route path="/:id" element={<CompPage />} />
            <Route path="/configurator" element={<ConfiguratorPage />} />
            <Route path="/about" element={<About />}>
              <Route path="company" element={<AboutUs />} />
              <Route path="faq" element={<FaqMap />} />
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="/game" element={<PCForGame />} />
            <Route path="/game/:id" element={<GamePC />} />
            <Route path="/lowprice" element={<LowPriceComps />} />
            <Route path="/lowprice/:id" element={<CompPage />} />
            <Route path="/dr" element={<ArrayDrop />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
