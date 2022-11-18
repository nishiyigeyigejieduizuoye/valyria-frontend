import * as React from 'react';
import { Grid, Box } from '@mui/material';
import SelectBox from './SelectBox'

function Customgame() {
    return (
        <Grid container spacing={1} rowSpacing={3}>
            <Grid item xs={12} > </Grid>
            <SelectBox />
        </Grid>


    );
}
export default Customgame;