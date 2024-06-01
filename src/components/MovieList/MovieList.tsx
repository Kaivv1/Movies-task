import { gridMoviesList, Movie } from "../../assets/grid/export";
import { useGetRows } from "../../hooks/useGetRows";
import "./_movie-list.scss";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = () => {
  const { rows } = useGetRows<Movie>(gridMoviesList);

  return (
    <Container as="section" fluid className="movies-grid">
      {rows.map((row, i) => (
        <Row key={i}>
          {row.map((movie, y) => (
            <Col key={y} xs={6} sm={3} md={3} className="p-0">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default MovieList;
