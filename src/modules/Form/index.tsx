import { Box, Container, Grid } from '@mui/material';
import MoviePoster from './components/moviePoster';
import MovieSinopse from './components/movieSinopse';

import BtnCadastrar from './components/btnCadastrar';
import MovieGenresAndPlatforms from './components/movieGenresAndPlatforms';
import MovieName from './components/movieName';
import MovieYear from './components/movieYear';
import MovieRuntime from './components/movieRuntime';
import MovieRating from './components/movieRating';
import { ThemeProvider } from '@mui/system';
import { theme } from '../../shared/themes/theme';

export default function Form() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="body">
        <Container maxWidth="md">
          <MovieName />
          <Grid container spacing={1}>
            <MovieYear />
            <MovieRuntime />
            <MovieRating />
          </Grid>
          <MovieGenresAndPlatforms />
          <MovieSinopse />
          <MoviePoster />
          <BtnCadastrar />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
