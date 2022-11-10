import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, Button, Grid } from '@mui/material';

import './form.css';

export default function MoviePoster() {
  return (
    <Box>
      <Grid container>
        <Box className="poster">
          <Button
            variant="text"
            component="label"
            sx={{
              fontSize: '14px',
              padding: '10px',
              marginLeft: '300px'
            }}
          >
            <FileUploadOutlinedIcon /> Upload da capa
            <input hidden accept="image/*" multiple type={'file'} />
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
