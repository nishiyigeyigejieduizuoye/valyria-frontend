import * as React from 'react';
import { Grid, Box } from '@mui/material';
import SelectBox from './SelectBox'

function Customgame() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} rowSpacing={3}>
                <Grid md='6' justifyContent="center" ><SelectBox /></Grid>
                <Grid md='6' justifyContent="center" ><SelectBox /></Grid>
            </Grid>
        </Box >

    );
}
export default Customgame;