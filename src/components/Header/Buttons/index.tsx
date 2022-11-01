import { Button } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from '../../../shared/themes/theme';

export default function Buttons() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        className="btn-header"
        variant="text"
        sx={{ marginLeft: '50px', paddingBottom: '55px', fontSize: '20px' }}
      >
        Home
      </Button>
      <Button
        className="btn-header"
        variant="text"
        sx={{ marginLeft: '50px', paddingBottom: '55px', fontSize: '20px' }}
      >
        Cadastrar Filme
      </Button>
    </ThemeProvider>
  );
}
