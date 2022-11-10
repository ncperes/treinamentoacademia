import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  Grid,
  IconButton,
  SelectChangeEvent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './form.css';
import { useState } from 'react';

export default function MovieGenresAndPlatforms() {
  const [genre, setGenre] = useState<string>('');
  const [platform, setPlatform] = useState<string>('');

  const [genreList, setGenreList] = useState<string[]>([]);
  const [platformList, setPlatformList] = useState<string[]>([]);

  const handleGenreChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };

  const handlePlatformChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
  };

  return (
    <>
      <Box>
        <Grid container spacing={1} columns={14}>
          <Grid item md={5}>
            <FormControl className="form-control" sx={{ marginTop: 2 }}>
              <InputLabel>Gênero</InputLabel>
              <Select label="Gênero" value={genre} onChange={handleGenreChange}>
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
              onClick={() => setGenreList([...genreList, genre])}
              className="btn-form-control"
              variant="outlined"
              sx={{ marginTop: 3 }}
            >
              Adicionar
            </Button>
          </Grid>

          <Grid item md={5}>
            <FormControl className="form-control" sx={{ marginTop: 2 }}>
              <InputLabel>Disponível em</InputLabel>
              <Select label="Disponível em" value={platform} onChange={handlePlatformChange}>
                <MenuItem value={'Netflix'}>Netflix</MenuItem>
                <MenuItem value={'Prime Video'}>Prime Video</MenuItem>
                <MenuItem value={'Paramount'}>Paramount</MenuItem>
                <MenuItem value={'HBO'}>HBO</MenuItem>
                <MenuItem value={'Disney Plus'}>Disney Plus</MenuItem>
                <MenuItem value={'Telecine'}>Telecine</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <Button
              onClick={() => setPlatformList([...platformList, platform])}
              className="btn-form-control"
              variant="outlined"
              sx={{ marginTop: 3 }}
            >
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={1}>
          {/* gêneros selecionados */}
          <Grid className="genres-and-platforms" item md={6}>
            {genreList.map((genre, index) => (
              <Box className="genres" component="span" key={index}>
                {genre}{' '}
                <IconButton
                  onClick={() => {
                    const lista = genreList.slice();
                    lista.splice(index, 1);
                    setGenreList(lista);
                  }}
                  className="delete-genre"
                  sx={{ padding: 1 }}
                >
                  <CloseIcon sx={{ fontSize: 'small' }} />
                </IconButton>
              </Box>
            ))}
          </Grid>
          {/* plataformas selecionadas */}
          <Grid className="genres-and-platforms" item md={6}>
            {platformList.map((platform, index) => (
              <Box className="platforms" component="span" key={index}>
                {platform}{' '}
                <IconButton
                  onClick={() => {
                    const lista = platformList.slice();
                    lista.splice(index, 1);
                    setPlatformList(lista);
                  }}
                  className="delete-platform"
                  sx={{ padding: 1 }}
                >
                  <CloseIcon sx={{ fontSize: 'small' }} />
                </IconButton>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
