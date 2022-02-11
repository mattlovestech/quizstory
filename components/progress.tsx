
import Box from '@mui/material/Box';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

export default function ProgressTopBar(props: any) {
    return (
        <Box sx={{ width: '100%', height: "20px"}} >
    <LinearProgress  style={{color: "red"}}  variant="determinate"
                    value={props["value"]} />

    </Box>
);
}
