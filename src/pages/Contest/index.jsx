import * as React from 'react';
import { Grid, Box } from '@mui/material';
import GameList from './GameList';
import Typography from '@mui/material/Typography';
function Contest() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} justifyContent="center" rowSpacing={3}>
                <Grid item xs={12} > </Grid>
                <Typography variant="h3" gutterBottom>
                    Contest List
                </Typography>
                <Grid item xs={12}> </Grid>
                <GameList />
            </Grid>
        </Box >

    );
}
export default Contest;