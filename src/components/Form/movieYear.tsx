import { Grid, TextField, ThemeProvider } from '@mui/material';
import { theme } from '../../shared/themes/theme';

export default function MovieYear() {
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={4}>
        <TextField
          className="text-field"
          variant="outlined"
          label="Ano de lançamento"
          sx={{ marginTop: 2 }}
        />
      </Grid>
    </ThemeProvider>
  );
}
