import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Exprience from "./components/exprience/Exprience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <About />
      <Exprience />
      <Portfolio />
      <Contact /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Exprience />
                <Portfolio />
                <Contact />
              </>
            }
          />
          {/* <Route path="#about" element={<About />} />
          <Route path="#exprience" element={<Exprience />} />
          <Route path="#portfolio" element={<Portfolio />} />
          <Route path="#contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
