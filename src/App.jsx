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
import NotFound from "./pages/NotFound";

import Admin from "./pages/Admin";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function App() {
  return (
    <>
      <Helmet>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />

            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </script>
          </>
        )}
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

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;