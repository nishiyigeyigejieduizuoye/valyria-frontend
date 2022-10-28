import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const columns = [
    { field: 'id', headerName: 'Constest ID', type: 'number', width: 100 },
    { field: 'name', headerName: 'Constest Name', sortable: false, width: 150 },
    { field: 'StartTime', headerName: 'Start Time', width: 130 },
    { field: 'LeftTime', headerName: 'Left Time', width: 150 },
    {
        field: 'Description',
        headerName: 'Description',
        description: 'This column is simple description',
        sortable: false,
        width: 160,
    },
];
const columns2 = [
    { field: 'id', headerName: 'Constest ID', type: 'number', width: 100 },
    { field: 'name', headerName: 'Constest Name', sortable: false, width: 150 },
    { field: 'StartTime', headerName: 'Start Time', width: 130 },
    { field: 'Winner', headerName: 'Winner', sortable: false, width: 150 },
    {
        field: 'Description',
        headerName: 'Description',
        description: 'This column is simple description',
        sortable: false,
        width: 160,
    },
];
const rows1 = [
    { id: 1, name: 'Game1', StartTime: '20200101', LeftTime: '10th May 2003', Description: "123" },
    { id: 2, name: 'Game2', StartTime: '11th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 3, name: 'Game3', StartTime: '10th July 2003', LeftTime: '10th May 2003', Description: null },
    { id: 4, name: 'Game4', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 5, name: 'Game5', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 6, name: 'Game6', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 7, name: 'Game7', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 8, name: 'Game8', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
    { id: 9, name: 'Game9', StartTime: '10th May 2003', LeftTime: '10th May 2003', Description: null },
];
const rows2 = [
    { id: 1, name: 'Game1', StartTime: '20200101', Winner: 'chenyuhao', Description: "123" },
    { id: 2, name: 'Game2', StartTime: '11th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 3, name: 'Game3', StartTime: '10th July 2003', Winner: 'chenyuhao', Description: null },
    { id: 4, name: 'Game4', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 5, name: 'Game5', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 6, name: 'Game6', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 7, name: 'Game7', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 8, name: 'Game8', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
    { id: 9, name: 'Game9', StartTime: '10th May 2003', Winner: 'chenyuhao', Description: null },
];
const Contest = () => {
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

            <Grid container spacing={1} justifyContent="center" >
                <Grid >
                    <Box sx={{ height: 300, width: 800 }}>
                        <h2>Running context</h2>
                        <DataGrid
                            rows={rows1}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}> </Grid>
                <Grid item xs={12}> </Grid>
                <Grid item xs={12}> </Grid>
                <Grid item xs={12}> </Grid>
                <Grid >
                    <Box sx={{ height: 300, width: 800 }}>
                        <h2>Pending contest</h2>
                        <DataGrid
                            rows={rows1}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} > </Grid>
                <Grid item xs={12}> </Grid>
                <Grid item xs={12}> </Grid>
                <Grid item xs={12}> </Grid>
                <Grid >
                    <Box sx={{ height: 300, width: 800 }}>
                        <h2>History contest</h2>
                        <DataGrid
                            rows={rows2}
                            columns={columns2}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box >

    );
}
export default Contest;