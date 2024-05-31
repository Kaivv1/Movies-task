import { Movie } from "../../assets/grid/export";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import "./_movie-card.scss";

import { FC } from "react";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { img, title, genre } = movie;

  return (
    <div className="movie-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="content">
        <Heading as="h3">{title}</Heading>
        <Paragraph variant="sub">{genre}</Paragraph>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default MovieCard;
