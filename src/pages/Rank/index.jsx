import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
const Rank = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={1}> </Grid>
                <Grid item xs={1}><img src={'/'} /> logo</Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button variant="outlined" onClick={() => {
                            navigate("/");
                        }} >Home</Button>
                        <Button variant="outlined" onClick={() => {
                            navigate("/Contest");
                        }} >Contest</Button>
                        <Button variant="outlined" onClick={() => {
                            navigate("/Rank");
                        }} >Rank</Button>
                        <Button variant="outlined" onClick={() => {
                            navigate("/Battle");
                        }} >Battle</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}><Button variant="contained" onClick={() => {
                    navigate("/Login");
                }} >LOGIN/USERNAME</Button></Grid>
            </Grid>
        </Box >
    );
}
export default Rank;