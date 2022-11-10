import { Grid, TextField } from '@mui/material';

export default function MovieRuntime() {
  return (
    <Grid item md={4}>
      <TextField className="text-field" variant="outlined" label="Duração" sx={{ marginTop: 2 }} />
    </Grid>
  );
}
