import { ThemeProvider } from '@emotion/react';
import { theme } from '../../shared/themes/theme';
import { FormControl, Select, MenuItem, InputLabel, Button, Box, Grid } from '@mui/material';
import './form.css';

export default function MovieGenresAndPlatforms() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={1} columns={14}>
          <Grid item md={5}>
            <FormControl className="form-control" sx={{ marginTop: 2 }}>
              <InputLabel>Gênero</InputLabel>
              <Select label="Gênero" value={'Gênero'}>
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
            <Button className="btn-form-control" variant="outlined" sx={{ marginTop: 3 }}>
              Adicionar
            </Button>
          </Grid>

          <Grid item md={5}>
            <FormControl className="form-control" sx={{ marginTop: 2 }}>
              <InputLabel>Disponível em</InputLabel>
              <Select label="Disponível em" value={'Plataforma'}>
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
            <Button className="btn-form-control" variant="outlined" sx={{ marginTop: 3 }}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
