import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gaming from "./pages/Gaming";
import Movies from "./pages/Movies";
import Celebrities from "./pages/Celebrities";
import Football from "./pages/Football";
import Technology from "./pages/Technology";

import Article from "./pages/Article";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gaming" element={<Gaming />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/celebrities" element={<Celebrities />} />
        <Route path="/football" element={<Football />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/article/:id" element={<Article />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;