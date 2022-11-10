import { Box, FormLabel, TextField } from '@mui/material';

export default function MovieName() {
  return (
    <>
      <Box sx={{ marginBottom: 1 }}>
        <FormLabel sx={{ fontSize: '21px', marginLeft: 1 }}>Cadastrar Filme</FormLabel>
      </Box>

      <Box>
        <TextField className="text-field" variant="outlined" label="Nome do filme" />
      </Box>
    </>
  );
}
