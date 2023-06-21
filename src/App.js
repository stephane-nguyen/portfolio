import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <WorkExperience />
      <Footer />
    </div>
  );
}
