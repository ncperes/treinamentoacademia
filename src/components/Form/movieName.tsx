import { Box, FormLabel, TextField, ThemeProvider } from '@mui/material';
import { theme } from '../../shared/themes/theme';

export default function MovieName() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: 1 }}>
        <FormLabel sx={{ fontSize: '21px', marginLeft: 1 }}>Cadastrar Filme</FormLabel>
      </Box>

      <Box>
        <TextField className="text-field" variant="outlined" label="Nome do filme" />
      </Box>
    </ThemeProvider>
  );
}
