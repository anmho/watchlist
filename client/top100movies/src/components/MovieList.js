import Movie from "./Movie.js";
import { Grid } from "@chakra-ui/react";

function MovieList({ movies, onPosterClicked }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
      {movies !== undefined && movies.length > 0 ? (
        movies.map((movie, i) => {
          return movie.poster_path ? (
            <Movie movie={movie} key={i} onPosterClicked={onPosterClicked} />
          ) : null;
        })
      ) : (
        <p>No movies to show</p>
      )}
    </Grid>
  );
}

export default MovieList;
