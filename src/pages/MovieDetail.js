import React, { useState, useEffect } from "react";
import { fetchMovieById, fetchMovieVideosById } from "../api/api";
import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
import MovieDetailSection from "../components/MovieDetailSection";
import Genres from "../components/Genres";
import FooterLayout from "../layout/FooterLayout";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import HeadingLayout from "../layout/HeadingLayout";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});
  const [urlVideo, setUrlVideo] = useState("");
  const [genres, setGenres] = useState([]);

  const id = props.match.params.movieId;
  const poster_path = `${process.env.REACT_APP_TMDB_IMG}${movie.poster_path}`;
  const backdrop_path = `${process.env.REACT_APP_TMDB_IMG}${movie.backdrop_path}`;

  useEffect(() => {
    fetchMovieById(id).then((data) => {
      setMovie(data);
      setGenres(data.genres);
    });
    // fetchMovieById(id).then((data) => console.log(data));
  }, [id]);

  useEffect(() => {
    fetchMovieVideosById(id).then((data) =>
      setUrlVideo(`https://www.youtube.com/watch?v=${data.results[0].key}`)
    );
  }, [id]);

  const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}hr ${minutes}m`;
  };

  return (
    <>
      <Navbar />
      <div>
        <div
          className="detail-hero"
          style={{
            backgroundImage: `url(${backdrop_path})`,
          }}
        >
          <h3>{movie.title}</h3>
        </div>
        <div className="detail-container">
          <div className="detail-picture">
            <img src={poster_path} alt={movie.title} />
            <div>
              {movie.vote_average}
              <StarHalfIcon style={{ color: "#fe0056" }} />
            </div>
          </div>

          <div className="detail-info">
            <MovieDetailSection section="Overview" info={movie.overview} />
            <MovieDetailSection
              section="Release date"
              info={movie.release_date}
            />
            <MovieDetailSection
              section="Runtime"
              info={timeConvert(movie.runtime)}
            />
            <MovieDetailSection
              section="Genres"
              info={<Genres genres={genres} />}
            />
          </div>
        </div>
        <div className="video-container">
          <HeadingLayout title="Play Video" color="white" />
          <div>
            <ReactPlayer
              url={urlVideo}
              playing={false}
              width={854}
              height={480}
            />
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default MovieDetail;
