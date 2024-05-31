import { gridMoviesList, Movie } from "../../assets/grid/export";
import "./_movie-list.scss";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const rows: Array<Movie[]> = [];

for (let i = 0; i < gridMoviesList.length; i += 4) {
  const row = gridMoviesList.slice(i, i + 4);
  rows.push(row);
}

const MovieList = () => {
  return (
    <Container as="div" fluid>
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
