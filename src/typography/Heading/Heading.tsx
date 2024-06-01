import { FC, ReactNode } from "react";
import "./_heading.scss";

type HeadingProps = {
  as: "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};

const Heading: FC<HeadingProps> = ({ as, children }) => {
  const HeadingElement = as;
  let className;

  if (as === "h2") className = "large-heading";
  if (as === "h3") className = "medium-heading";
  if (as === "h4") className = "news-heading";
  if (as === "h5") className = "sm-heading";
  if (as === "h6") className = "sub-heading";

  return <HeadingElement className={className}>{children}</HeadingElement>;
};

export default Heading;
