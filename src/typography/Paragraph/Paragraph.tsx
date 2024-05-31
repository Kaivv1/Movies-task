import type { ComponentPropsWithoutRef, FC } from "react";
import "./_paragraph.scss";

type ParagraphProps = ComponentPropsWithoutRef<"p"> & {
  variant: "sub" | "muted" | "date" | "popular";
};

const Paragraph: FC<ParagraphProps> = ({ variant, ...props }) => {
  let className;

  if (variant === "sub") className = "sub-paragraph";
  if (variant === "muted") className = "muted-paragraph";
  if (variant === "date") className = "date-paragraph";
  if (variant === "popular") className = "popular-paragraph";

  return <p {...props} className={className} />;
};

export default Paragraph;
