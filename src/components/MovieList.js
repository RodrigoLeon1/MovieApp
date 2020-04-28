import React from "react";
import MovieCard from "./MovieCard";

import Grid from "@material-ui/core/Grid";

const MovieList = ({ movies }) => (
  <div>
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {movies.map((movie) => (
        <Grid item key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default MovieList;
