import React, { useState, useEffect } from "react";
import { fetchUpcomingMovies } from "../api/api";

import MovieList from "../components/MovieList";
import HeadingLayout from "../layout/HeadingLayout";
import HeroLayout from "../layout/HeroLayout";
import FooterLayout from "../layout/FooterLayout";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchUpcomingMovies().then((data) => setUpcomingMovies(data.results));
  }, []);

  return (
    <div>
      <HeroLayout />
      <section className="section-container">
        <HeadingLayout title="Upcoming movies" />
        <MovieList movies={upcomingMovies} />
      </section>
      <FooterLayout />
    </div>
  );
};

export default Home;
