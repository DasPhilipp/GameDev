import { ChatPanel, SideBar } from './components';
import { Box } from '@mui/material';

export const drawerWidth = 340;

const Main: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}

      <ChatPanel />
      <SideBar />
    </Box>
  );
};

export default Main;
