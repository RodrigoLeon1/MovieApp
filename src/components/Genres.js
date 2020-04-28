import React from "react";
import Chip from "@material-ui/core/Chip";

const Genres = (props) =>
  props.genres.map((genre) => (
    <Chip
      key={genre.id}
      label={genre.name}
      variant="outlined"
      style={{ marginRight: "10px" }}
    />
  ));

export default Genres;
