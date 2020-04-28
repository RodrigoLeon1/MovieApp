import React, { useState } from "react";
import FooterLayout from "../layout/FooterLayout";
import Navbar from "../components/Navbar";
import HeadingLayout from "../layout/HeadingLayout";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { fetchMovieByQuery } from "../api/api";
import MovieList from "../components/MovieList";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Search = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const _handleChange = (event) => {
    setQuery(event.target.value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();

    fetchMovieByQuery(query).then((data) => {
      setMovies(data.results);
    });
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <form onSubmit={_handleSubmit}>
          <HeadingLayout title="Search" color="white" />
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search movies"
              onChange={_handleChange}
              inputProps={{ "aria-label": "search movies" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      </div>
      {Object.keys(movies).length ? (
        <div style={{ marginTop: "2em" }}>
          <section className="section-container">
            <HeadingLayout title="Top movies" />
            <MovieList movies={movies} />
          </section>
        </div>
      ) : (
        ""
      )}
      <FooterLayout />
    </>
  );
};

export default Search;
