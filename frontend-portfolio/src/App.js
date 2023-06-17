import React from "react";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <SocialIcons />
      <Footer />
    </div>
  );
}
