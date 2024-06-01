import { Col, Container, Row } from "react-bootstrap";
import BestMoviesSection from "../../components/BestMoviesSection/BestMoviesSection";
import LatestMoviesSection from "../../components/LatestMoviesSection/LatestMoviesSection";
import Logo from "../../components/Logo/Logo";
import MovieList from "../../components/MovieList/MovieList";
import NewsSection from "../../components/NewsSection/NewsSection";
import PopularFilmsSection from "../../components/PopularFilmsSection/PopularFilmsSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import Slider from "../../components/Slider/Slider";
import "./_main.scss";

const Main = () => {
  return (
    <main>
      <div className="top-section">
        <Logo />
        <SearchBar />
      </div>
      <Slider />
      <MovieList />
      <BestMoviesSection />
      <Container className="bottom-sections-grid p-0 fluid">
        <Row className="section-row">
          <Col md={12} lg={8} xl={8} className="first-section">
            <LatestMoviesSection />
          </Col>
          <Col className="second-section">
            <PopularFilmsSection />
            <NewsSection />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
