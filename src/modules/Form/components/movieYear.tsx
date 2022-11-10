import { Grid, TextField } from '@mui/material';

export default function MovieYear() {
  return (
    <Grid item md={4}>
      <TextField className="text-field" variant="outlined" label="Ano de lançamento" sx={{ marginTop: 2 }} />
    </Grid>
  );
}
