import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import PCForGame from "./components/PCForGame/PCForGame";
import LowPriceComps from "./pages/LowPrieceComps/LowPriceComps";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/Faq/Faq";
import Comments from "./components/Comments/Comments";

const App = () => {
  return (
    <>
      <Header />
      <div className="main_route">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />}>
            <Route path="company" element={<AboutUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/game" element={<PCForGame />} />
          <Route path="/lowprice" element={<LowPriceComps />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
