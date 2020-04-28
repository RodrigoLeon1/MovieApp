import React from "react";

import LinearScaleIcon from "@material-ui/icons/LinearScale";

const MovieDetailSection = (props) => (
  <>
    <div className="detail-section">
      <LinearScaleIcon />
      <div>{props.section}</div>
    </div>
    <div className="detail-content">
      <p>{props.info}</p>
    </div>
  </>
);

export default MovieDetailSection;
