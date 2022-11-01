import { ThemeProvider } from '@emotion/react';
import { theme } from '../../shared/themes/theme';
import { FormControl, Select, MenuItem, InputLabel, Button, Grid, SelectChangeEvent } from '@mui/material';
import './form.css';
import React from 'react';

export const platformList: string[] = [];

export function MoviePlatforms(): JSX.Element {
  const [platform, setPlatform] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
  };

  const handleClick = () => {
    platformList.push(platform);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item md={5}>
        <FormControl className="form-control" sx={{ marginTop: 2 }}>
          <InputLabel>Disponível em</InputLabel>
          <Select id="platform-selected" label="Disponível em" value={platform} onChange={handleChange}>
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
          onClick={handleClick}
          id="btn-add-platform"
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
