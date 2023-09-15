import { Box,  Stack } from '@mui/material';
import Navbar from './Layouts/Navbar';
import Sidebar from './Pages/Sidebar';
import Center from './Pages/Center';
import Rightbar from './Pages/Rightbar';

function App() {
  return (
    <Box>
    <Navbar/>
    <Stack direction='row' spacing={2} justifyContent='space-between'>
    <Sidebar/>
    <Center/>
    <Rightbar/>
    </Stack>
  </Box>
  );
}

export default App;
