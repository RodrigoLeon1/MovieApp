import React from "react";

const HeadingLayout = ({ title, color = "" }) => (
  <>
    <h2 className="title" style={{ color: color }}>
      {title}
    </h2>
    <hr className="hr-primary" />
  </>
);

export default HeadingLayout;
