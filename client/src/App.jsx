import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import  About  from "./pages/About.jsx";
import ContactUs  from "./pages/ContactUs.jsx";
import { Projects } from "./pages/Projects.jsx"; 
import Skills from "./pages/Skills.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
