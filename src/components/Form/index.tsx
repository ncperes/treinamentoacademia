import { Box, Container, Grid } from '@mui/material';
import MoviePoster from './moviePoster';
import MovieSinopse from './movieSinopse';

import BtnCadastrar from './btnCadastrar';
import { MovieGenre } from './movieGenre';
import { MoviePlatforms } from './moviePlatforms';
import MovieGenresAndPlatforms from './movieGenresAndPlatforms';
import MovieName from './movieName';
import MovieYear from './movieYear';
import MovieRuntime from './movieRuntime';
import MovieRating from './movieRating';

export default function Form() {
  return (
    <Box className="body">
      <Container maxWidth="md">
        <MovieName />
        <Grid container spacing={1}>
          <MovieYear />
          <MovieRuntime />
          <MovieRating />
        </Grid>
        <Grid container spacing={1} columns={14}>
          <MovieGenre />
          <MoviePlatforms />
        </Grid>
        <MovieGenresAndPlatforms />
        <MovieSinopse />
        <MoviePoster />
        <BtnCadastrar />
      </Container>
    </Box>
  );
}
