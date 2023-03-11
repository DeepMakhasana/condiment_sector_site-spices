import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Product from "./components/product/Product";
import CaseStudies from "./components/case-studies/CaseStudies";
import Contact from "./components/contact/Contact";
import Success from "./components/contact/Success";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:title" element={<Product />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<Success />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
