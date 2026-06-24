import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          BREAKING NEWS
        </span>

        <h1>
          GTA 6, Movies, Celebrities &
          Everything Trending
        </h1>

        <p>
          Stay updated with the latest gaming news,
          blockbuster movies, celebrity stories,
          football headlines and entertainment trends.
        </p>

        <Link to="/gaming">
          <button className="hero-btn">
            Explore Stories
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;