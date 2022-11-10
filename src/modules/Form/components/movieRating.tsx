import { FormControl, Select, InputLabel, MenuItem, Grid, SelectChangeEvent } from '@mui/material';
import React from 'react';
import './form.css';

export default function MovieRating() {
  const [ageRating, setAgeRating] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAgeRating(event.target.value as string);
  };

  return (
    <Grid item md={4}>
      <FormControl className="form-control" sx={{ marginTop: 2 }}>
        <InputLabel>Classificação indicativa</InputLabel>
        <Select label="Classificação indicativa" value={ageRating} onChange={handleChange}>
          <MenuItem value={'L'}>Livre</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>
          <MenuItem value={'14'}>14</MenuItem>
          <MenuItem value={'16'}>16</MenuItem>
          <MenuItem value={'18'}>18</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
