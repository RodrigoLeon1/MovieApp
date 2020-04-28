import React, { useState, useEffect } from "react";
import { fetchTopMovies } from "../api/api";

import MovieList from "../components/MovieList";
import HeadingLayout from "../layout/HeadingLayout";
import HeroLayout from "../layout/HeroLayout";
import FooterLayout from "../layout/FooterLayout";

const TopRated = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies().then((data) => setTopMovies(data.results));
  }, []);

  return (
    <div>
      <HeroLayout />
      <section className="section-container">
        <HeadingLayout title="Top movies" />
        <MovieList movies={topMovies} />
      </section>
      <FooterLayout />
    </div>
  );
};

export default TopRated;
