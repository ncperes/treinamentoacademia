import { ThemeProvider } from '@emotion/react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, Button, Grid } from '@mui/material';
import './form.css';

import { theme } from '../../shared/themes/theme';

export default function MoviePoster() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Box className="poster">
            <Button
              variant="text"
              component="label"
              sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', fontSize: '14px' }}
            >
              <FileUploadOutlinedIcon /> Upload da capa
              <input hidden accept="image/*" multiple type={'file'} />
            </Button>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
