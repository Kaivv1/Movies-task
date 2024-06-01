import spectre from "./007.jpg";
import alice from "./alice-in-wonderworld.jpg";
import avatar from "./avatar.jpg";
import beforeYou from "./before-you.jpg";
import everest from "./everest.jpg";
import haunted from "./haunted.jpg";
import help from "./help.jpg";
import hobbit from "./hobbit.jpg";
import hungerGames from "./hunger-games.jpg";
import impossible from "./impossible.jpg";
import mothersDay from "./mothers-day.jpg";
import taleOfLove from "./tale-of-love.jpg";

export type LatestMovie = {
  title: string;
  img: string;
};

export const latestMoviesList: LatestMovie[] = [
  { title: "The hobbit", img: hobbit },
  { title: "A tale of love", img: taleOfLove },
  { title: "The impossible", img: impossible },
  { title: "Avatar", img: avatar },
  { title: "Alice in wonderland", img: alice },
  { title: "333 Haunted", img: haunted },
  { title: "007 Spectre", img: spectre },
  { title: "Me before you", img: beforeYou },
  { title: "Mother's day", img: mothersDay },
  { title: "The help", img: help },
  { title: "The hunger games", img: hungerGames },
  { title: "Everest", img: everest },
];
