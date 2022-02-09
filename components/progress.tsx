import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressTopBar() {
    return (
        <Box sx={{ width: '100%' }}>
    <LinearProgress color={"secondary"} variant="determinate"
                    value={80} />
    </Box>
);
}