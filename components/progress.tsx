
import Box from '@mui/material/Box';
import React, { Component } from 'react';
import { LinearProgress } from '@material-ui/core';

export default function ProgressTopBar(props: any) {
    return (
        <Box sx={{ width: '100%'}} >
    <LinearProgress   variant="determinate"
                    value={70} />

    </Box>
);
}
