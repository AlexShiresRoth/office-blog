import React from "react";
type Props = {
  heading: string;
};

const BigHeading = ({ heading }: Props) => {
  return <h2 className="font-bold text-4xl my-4">{heading}</h2>;
};

export default BigHeading;
