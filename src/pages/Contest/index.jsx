import * as React from 'react';
import { Grid, Box } from '@mui/material';
import GameList from './GameList';

function Contest() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent="center" rowSpacing={3}>

                <Grid item xs={12} > </Grid>
                <h1>Contest List</h1>
                <Grid item xs={12}> </Grid>

                <GameList />
            </Grid>
        </Box >

    );
}
export default Contest;