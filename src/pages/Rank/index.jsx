import * as React from 'react';
import RankList from './Compoent/RankList';
import Grid from '@mui/material/Grid'
import DefaultState from './Compoent/DefaultState'
const Rank = () => {
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={3}>
            <DefaultState />
            <Grid item xs={12} > </Grid>
            <RankList />
        </Grid>
    );
}
export default Rank;