import { FC, ReactNode } from "react";
import "./_heading.scss";

type HeadingProps = {
  variant:
    | "movie-list-heading"
    | "popular-movies-sub-heading"
    | "news-headings"
    | "bubble-heading"
    | "lg"
    | "md"
    | "sm";
  children: ReactNode;
};

const Heading: FC<HeadingProps> = ({ variant, children }) => {
  let className;

  if (variant === "movie-list-heading") className = "movie-list-heading";
  if (variant === "popular-movies-sub-heading")
    className = "popular-movies-sub-heading";
  if (variant === "news-headings") className = "news-headings";
  if (variant === "bubble-heading") className = "bubble-heading";
  if (variant === "lg") className = "large-heading";
  if (variant === "md") className = "medium-heading";
  if (variant === "sm") className = "small-heading";

  return <h2 className={className}>{children}</h2>;
};

export default Heading;
