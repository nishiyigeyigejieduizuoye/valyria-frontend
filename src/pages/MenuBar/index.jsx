import * as React from 'react';
import { ButtonGroup, Button, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={1}>
            <Grid item xs={1}> </Grid>
            <Grid item xs={1}><Avatar alt="logo" src="src\logo\logo.png" /></Grid>
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
    );
}
export default MenuBar;