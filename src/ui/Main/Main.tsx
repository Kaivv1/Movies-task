import Logo from "../../components/Logo/Logo";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Slider from "../../components/Slider/Slider";
import "./_main.scss";

const Main = () => {
  return (
    <main>
      <div>
        <Logo />
        <SearchBar />
      </div>
      <Slider />
      <MovieList />
    </main>
  );
};

export default Main;
