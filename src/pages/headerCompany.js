import * as React from 'react';
import './style.css'
import { Box } from '@mui/material';

export default function BackgroundCompany() {
  return (
      <div>
        <Box className='backgroundCompany' style={{ width: '100%', height:'55em', backgroundRepeat: 'no-repeat'}}>
            <div className="segitiga2" marked="center" />
            <div className="segitiga1" marked="center" />
        </Box>
      </div>
  );
}