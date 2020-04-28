import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MovieCard = ({ id, title, overview, poster }) => {
  const posterPath = `${process.env.REACT_APP_TMDB_IMG}${poster}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card style={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="300"
            image={posterPath}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${overview.substring(0, 130)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More info
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MovieCard;
