import * as React from 'react';
import RankList from './Compoent/RankList';
import Grid from '@mui/material/Grid'
const Rank = () => {
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={3}>
            <Grid item xs={12} > </Grid>
            <RankList />
        </Grid>
    );
}
export default Rank;