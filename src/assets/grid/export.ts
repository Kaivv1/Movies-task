import blackRock from "./black-rock.jpg";
import dragonLore from "./dragon-lore.jpg";
import earthquake from "./earthquake.jpg";
import elysium from "./elysium.jpg";
import huntsman from "./huntsman.jpg";
import ironMan from "./iron-man.jpg";
import jungleBook from "./jungle-book.jpeg";
import numbersStation from "./numbers-station.jpg";
import oblivion from "./oblivion.jpeg";
import olympus from "./olympus.jpg";
import safeHaven from "./safe-haven.jpg";
import transformers from "./transformers.jpg";

export type Movie = {
  title: string;
  genre: string;
  img: string;
};

export const gridMoviesList: Movie[] = [
  {
    title: "Transformers",
    genre: "Fantasy",
    img: transformers,
  },
  {
    title: "Black rock",
    genre: "Drama",
    img: blackRock,
  },
  {
    title: "Dragon lore",
    genre: "Historical",
    img: dragonLore,
  },
  {
    title: "Safe haven",
    genre: "Thriller",
    img: safeHaven,
  },
  {
    title: "Olympus",
    genre: "Thriller",
    img: olympus,
  },
  {
    title: "The numbers station",
    genre: "Thriller",
    img: numbersStation,
  },
  {
    title: "Iron man",
    genre: "Fantasy",
    img: ironMan,
  },
  {
    title: "The huntsman",
    genre: "Action",
    img: huntsman,
  },
  {
    title: "Oblivion",
    genre: "Fantasy",
    img: oblivion,
  },
  {
    title: "Elysium",
    genre: "Fantasy",
    img: elysium,
  },
  {
    title: "The jungle book",
    genre: "Fantasy",
    img: jungleBook,
  },
  {
    title: "Earthquake",
    genre: "Thriller",
    img: earthquake,
  },
];
