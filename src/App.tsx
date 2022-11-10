import './App.css';
import Form from './modules/Form';
import Header from './modules/Header';
import Box from '@mui/material/Box/Box';

export default function App() {
  return (
    <Box className="App">
      <Header />
      <Form />
    </Box>
  );
}
