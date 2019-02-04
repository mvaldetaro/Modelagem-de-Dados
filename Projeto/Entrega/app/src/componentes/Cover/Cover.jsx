import React from "react";

const Cover = props => {
  const { src, alt, ...attrs } = props;

  return src ? (
    <img src={src} alt={alt} {...attrs} className={"imgFluid"} />
  ) : (
    false
  );
};

export default Cover;
