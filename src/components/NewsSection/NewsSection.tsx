import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import "./_news-section.scss";

const NewsSection = () => {
  return (
    <section className="news-section">
      <Heading variant="bubble-heading">News</Heading>
      <div>
        <Heading variant="news-headings">
          Adventure Movies: Action Mixed in Beatiful Locales
        </Heading>
        <Paragraph variant="muted">
          Adventure movies suck a viewer into the movie and keep him glued to
          the edge of the seat until the end, in ...
        </Paragraph>
        <Paragraph variant="date">November 21, 2016</Paragraph>
      </div>
      <hr />
      <div>
        <Heading variant="news-headings">
          The Wonder World of Kids' Movies
        </Heading>
        <Paragraph variant="muted">
          Online streaming movies are doing a great job in the development of
          kids by giving the opportunity to watch various ...
        </Paragraph>
        <Paragraph variant="date">November 21, 2016</Paragraph>
      </div>
    </section>
  );
};

export default NewsSection;
