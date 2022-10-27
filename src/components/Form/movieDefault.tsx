import {
  ThemeProvider,
  TextField,
  FormLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
  Grid
} from '@mui/material';
import { theme } from '../../shared/themes/theme';
import './form.css';

export default function MovieDefault() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: 1 }}>
        <FormLabel sx={{ fontSize: '21px', marginLeft: 1 }}>Cadastrar Filme</FormLabel>
      </Box>

      <Box>
        <TextField className="text-field" variant="outlined" label="Nome do filme" />
      </Box>

      <Box>
        <Grid container spacing={1}>
          <Grid item md={4}>
            <TextField
              className="text-field"
              variant="outlined"
              label="Ano de lançamento"
              sx={{ marginTop: 2 }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField className="text-field" variant="outlined" label="Duração" sx={{ marginTop: 2 }} />
          </Grid>
          <Grid item md={4}>
            <FormControl className="form-control" sx={{ marginTop: 2 }}>
              <InputLabel>Classificação indicativa</InputLabel>
              <Select label="Classificação indicativa" value={'Classificacao'}>
                <MenuItem value={'L'}>Livre</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
                <MenuItem value={'12'}>12</MenuItem>
                <MenuItem value={'14'}>14</MenuItem>
                <MenuItem value={'16'}>16</MenuItem>
                <MenuItem value={'18'}>18</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
