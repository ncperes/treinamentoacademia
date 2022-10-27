import { ThemeProvider } from '@emotion/react';
import { Box, Grid, TextField } from '@mui/material';
import { theme } from '../../shared/themes/theme';
import './form.css';

export default function MovieSinopse() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <TextField
            label="Sinopse"
            multiline
            minRows={6}
            variant="outlined"
            className="text-field"
            sx={{ marginTop: 2 }}
          ></TextField>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
