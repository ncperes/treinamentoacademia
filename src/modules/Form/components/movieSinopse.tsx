import { Box, Grid, TextField } from '@mui/material';
import './form.css';

export default function MovieSinopse() {
  return (
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
  );
}
