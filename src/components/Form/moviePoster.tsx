import { ThemeProvider } from '@emotion/react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, Grid } from '@mui/material';
import './form.css';

import { theme } from '../../shared/themes/theme';

export default function MoviePoster() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Box className="poster">
            <Box className="input-poster">
              <FileUploadOutlinedIcon /> Upload da capa
            </Box>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
