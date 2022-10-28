import { Button } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from '../../../shared/themes/theme';
import './buttons.css';

export default function Buttons() {
  return (
    <ThemeProvider theme={theme}>
      <Button className="btn-header" variant="text">
        Home
      </Button>
      <Button className="btn-header" variant="text">
        Cadastrar Filme
      </Button>
    </ThemeProvider>
  );
}
