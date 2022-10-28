import { Grid, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { theme } from '../../shared/themes/theme';

export default function MovieRuntime() {
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={4}>
        <TextField className="text-field" variant="outlined" label="Duração" sx={{ marginTop: 2 }} />
      </Grid>
    </ThemeProvider>
  );
}
