import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider
} from '@mui/material';
import React from 'react';
import { theme } from '../../shared/themes/theme';

export default function MovieGenre(): JSX.Element {
  const [genre, setGenre] = React.useState('');
  const genreSelected = document.querySelector('#genre-selected') as HTMLSelectElement;
  const genres = document.querySelector('.genres') as HTMLDivElement;

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };

  const handleClick = () => {
    if (!genres.innerText) {
      genres.innerText += genreSelected.innerText;
    } else {
      genres.innerText += ', ' + genreSelected.innerText;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={5}>
        <FormControl className="form-control" sx={{ marginTop: 2 }}>
          <InputLabel>Gênero</InputLabel>
          <Select id="genre-selected" label="Gênero" value={genre} onChange={handleChange}>
            <MenuItem value={'Ação'}>Ação</MenuItem>
            <MenuItem value={'Aventura'}>Aventura</MenuItem>
            <MenuItem value={'Comédia'}>Comédia</MenuItem>
            <MenuItem value={'Documentário'}>Documentário</MenuItem>
            <MenuItem value={'Drama'}>Drama</MenuItem>
            <MenuItem value={'Espionagem'}>Espionagem</MenuItem>
            <MenuItem value={'Faroeste'}>Faroeste</MenuItem>
            <MenuItem value={'Fantasia'}>Fantasia</MenuItem>
            <MenuItem value={'Ficção Científica'}>Ficção Científica</MenuItem>
            <MenuItem value={'Guerra'}>Guerra</MenuItem>
            <MenuItem value={'Musical'}>Musical</MenuItem>
            <MenuItem value={'Romance'}>Romance</MenuItem>
            <MenuItem value={'Terror'}>Terror</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2}>
        <Button
          onClick={handleClick}
          className="btn-form-control"
          variant="outlined"
          type="submit"
          sx={{ marginTop: 3 }}
        >
          Adicionar
        </Button>
      </Grid>
    </ThemeProvider>
  );
}
