import { Box, Container } from '@mui/material';
import MovieDefault from './movieDefault';
import MoviePoster from './moviePoster';
import MovieSinopse from './movieSinopse';
import MovieGenresAndPlatforms from './movieGenresAndPlatforms';
import BtnCadastrar from './btnCadastrar';

export default function Form() {
  return (
    <Box className="body">
      <Container maxWidth="md">
        <MovieDefault />
        <MovieGenresAndPlatforms />
        <MovieSinopse />
        <MoviePoster />
        <BtnCadastrar />
      </Container>
    </Box>
  );
}
