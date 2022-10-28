import { Box, Grid } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from '../../shared/themes/theme';

export default function MovieGenresAndPlatforms() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={1}>
          <Grid className="genres" item md={6} sx={{ fontSize: '14px', marginTop: 0.5 }}></Grid>
          <Grid className="platforms" item md={6} sx={{ fontSize: '14px', marginTop: 0.5 }}></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
