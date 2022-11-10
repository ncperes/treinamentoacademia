import { Box, Button, Grid } from '@mui/material';

import './form.css';

export default function BtnCadastrar() {
  return (
    <Box>
      <Grid container>
        <Grid item md={12}>
          <Button className="btn-cadastrar" variant="outlined" color="secondary" sx={{ marginTop: 2 }}>
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
