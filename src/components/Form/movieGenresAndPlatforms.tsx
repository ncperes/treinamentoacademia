import './form.css';

import { Box, Grid, IconButton } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from '../../shared/themes/theme';
import CloseIcon from '@mui/icons-material/Close';
import { platformList } from './moviePlatforms';
import { genreList } from './movieGenre';

export default function MovieGenresAndPlatforms() {
  function handleClick(array: string[], index: number): string[] {
    array.splice(index, 1);
    return array;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={1}>
          {/* gêneros selecionados */}
          <Grid className="genres-and-platforms" item md={6}>
            {genreList.map((genre, index) => (
              <Box className="genres" component="span" key={index}>
                {genre}{' '}
                <IconButton
                  onClick={() => handleClick(genreList, index)}
                  className="delete-genre"
                  sx={{ padding: 1 }}
                >
                  <CloseIcon sx={{ fontSize: 'small' }} />
                </IconButton>
              </Box>
            ))}
          </Grid>
          {/* plataformas selecionadas */}
          <Grid className="genres-and-platforms" item md={6}>
            {platformList.map((platform, index) => (
              <Box className="platforms" component="span" key={index}>
                {platform}{' '}
                <IconButton
                  onClick={() => handleClick(platformList, index)}
                  className="delete-platform"
                  sx={{ padding: 1 }}
                >
                  <CloseIcon sx={{ fontSize: 'small' }} />
                </IconButton>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
