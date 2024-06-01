import type { FC } from "react";
import "./_latest-movie-card.scss";
import { LatestMovie } from "../../assets/latest-movies/export";
import Heading from "../../typography/Heading/Heading";

type LatestMovieCardProps = {
  movie: LatestMovie;
};

const LatestMovieCard: FC<LatestMovieCardProps> = ({ movie }) => {
  const { title, img } = movie;

  return (
    <div className="latest-movie-card-container">
      <img src={img} alt="" />
      <div>
        <Heading variant="sm">{title}</Heading>
      </div>
    </div>
  );
};

export default LatestMovieCard;
