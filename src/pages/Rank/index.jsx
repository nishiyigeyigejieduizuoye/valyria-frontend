import * as React from 'react';
import RankList from './Component/RankList';
import Grid from '@mui/material/Grid'
import DefaultState from './Component/DefaultState'
const Rank = () => {
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={1}>
            <DefaultState />
            <Grid item xs={12} > </Grid>
            <RankList />
        </Grid>
    );
}
export default Rank;