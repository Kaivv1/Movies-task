import { Col, Container, Row } from "react-bootstrap";
import {
  LatestMovie,
  latestMoviesList,
} from "../../assets/latest-movies/export";
import { useGetRows } from "../../hooks/useGetRows";
import Heading from "../../typography/Heading/Heading";
import "./_latest-movies-section.scss";
import LatestMovieCard from "./LatestMovieCard";
import Pagination from "../Pagination/Pagination";

const LatestMoviesSection = () => {
  const { rows } = useGetRows<LatestMovie>(latestMoviesList);

  return (
    <section className="latest-movies-section">
      <Heading variant="lg">Latest movies</Heading>
      <Container fluid className="p-0 ">
        {rows.map((row, i) => (
          <Row key={i} className="">
            {row.map((movie, y) => (
              <Col
                key={y}
                className="p-3"
                xs={6}
                sm={6}
                md={3}
                lg={6}
                xl={3}
                xxl={3}
              >
                <LatestMovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <Pagination />
    </section>
  );
};

export default LatestMoviesSection;
