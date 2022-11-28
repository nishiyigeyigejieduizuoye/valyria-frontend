import * as React from 'react';
import { Grid, Box } from '@mui/material';
import GameList from './GameList';

import { Toolbar, } from "@mui/material";
function Contest() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent="center" rowSpacing={3}>
                <Grid item xs={12} > </Grid>
                <Grid item xs={12} > </Grid>
                <Toolbar />
                <GameList />
            </Grid>
        </Box >

    );
}
export default Contest;