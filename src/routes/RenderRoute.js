import React from "react";

const RenderRoute = ({ Component, title }) => {
  document.title = title + " - Pals" || "Pals";
  return <Component />;
};

export default RenderRoute;
