import type { FC } from "react";
import "./_best-movie-card.scss";
import { BestMovie } from "../../assets/best-movies/export";
import Heading from "../../typography/Heading/Heading";

type BestMovieCardProps = {
  movie: BestMovie;
};

const BestMovieCard: FC<BestMovieCardProps> = ({ movie }) => {
  const { genre, img } = movie;
  return (
    <div className="best-card-container">
      <img src={img} alt="" />
      <div>
        <Heading as="h3">{genre}</Heading>
        <button>Watch online</button>
      </div>
    </div>
  );
};

export default BestMovieCard;
