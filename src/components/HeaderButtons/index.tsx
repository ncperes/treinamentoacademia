import { Button } from '@mui/material';

export default function HeaderButtons() {
  return (
    <>
      <Button variant="text" sx={{ color: 'white', margin: 4, fontSize: 20 }}>
        Home
      </Button>
      <Button variant="text" sx={{ color: 'white', margin: 4, fontSize: 20 }}>
        Cadastrar Filme
      </Button>
    </>
  );
}
