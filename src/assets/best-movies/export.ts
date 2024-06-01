import brokenCity from "./broken-city.jpg";
import intoDarkness from "./into-darkness.jpg";
import lesMiserables from "./les-miserables.jpg";
import worldWarZ from "./world-war-z.jpg";

export type BestMovie = {
  genre: string;
  img: string;
};

export const bestMoviesList: BestMovie[] = [
  { genre: "Action", img: brokenCity },
  { genre: "Drama", img: intoDarkness },
  { genre: "Drama", img: lesMiserables },
  { genre: "Thriller", img: worldWarZ },
];
