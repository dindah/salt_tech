import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
          <Box sx={{ flex: 1 }} style={{ backgroundColor: 'white', peddingLeft: '2em'}}>
            <img src='asset/logo.png' className="justify-content-left" />
          </Box>
      </AppBar>
    </div>
  );
}

export default AppAppBar;