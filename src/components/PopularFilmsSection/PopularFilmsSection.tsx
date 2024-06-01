import Heading from "../../typography/Heading/Heading";
import "./_popular-films-section.scss";

const PopularFilmsSection = () => {
  const films = [
    "Trolls (2016)",
    "Romance (1999)",
    "Doctor Strange (2016)",
    "Keeping up with the joneses (2016)",
    "The BFG (2016)",
    "The Accountant (2016)",
    "Boo! A madea halloween (2016)",
  ];

  return (
    <section className="popular-films-section">
      <Heading variant="bubble-heading">Popular films</Heading>
      <ol>
        {films.map((film) => (
          <li>{film}</li>
        ))}
      </ol>
    </section>
  );
};

export default PopularFilmsSection;
