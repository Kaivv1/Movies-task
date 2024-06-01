import Heading from "../../typography/Heading/Heading";
import "./_best-movies-section.scss";
import { bestMoviesList } from "../../assets/best-movies/export";
import BestMovieCard from "./BestMovieCard";

const BestMoviesSection = () => {
  return (
    <section className="best-movies-section">
      <div className="heading">
        <Heading as="h2">Best movies online for free</Heading>
        <Heading as="h6">Most popular movies - watch all movies online</Heading>
      </div>
      <div className="best-movies-content">
        {bestMoviesList.map((movie) => (
          <BestMovieCard movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default BestMoviesSection;
