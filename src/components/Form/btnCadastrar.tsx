import { Box, Button, Grid, ThemeProvider } from '@mui/material';
import { theme } from '../../shared/themes/theme';
import './form.css';

export default function BtnCadastrar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid item md={12}>
            <Button className="btn-cadastrar" variant="outlined" color="secondary" sx={{ marginTop: 2 }}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
