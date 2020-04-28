import React from "react";

import LinearScaleIcon from "@material-ui/icons/LinearScale";

const MovieDetailSection = ({ section, info }) => (
  <>
    <div className="detail-section">
      <LinearScaleIcon />
      <div>{section}</div>
    </div>
    <div className="detail-content">
      <p>{info}</p>
    </div>
  </>
);

export default MovieDetailSection;
