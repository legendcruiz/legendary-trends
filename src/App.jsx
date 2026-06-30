import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

import Admin from "./pages/Admin";

function App() {
  return (
    <>
      {/* SEO DEFAULT (ADDED ONLY) */}
      <Helmet>
        <title>Legendary Trends | Gaming, Football & Tech News</title>
        <meta
          name="description"
          content="Latest news on gaming, football, movies, celebrities, and technology. Updated daily with trending stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;