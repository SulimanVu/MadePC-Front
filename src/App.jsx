import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/AboutPage/AboutPage";
import AboutUs from "./components/AboutUs/AboutUs";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="main_route">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
