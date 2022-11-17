import * as React from 'react';
import { useCallback, useState } from 'react';
import { Grid, Box, Button, TextField, Collapse, IconButton } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { get_game_list } from '@/api/game_api';
import { GameListsState } from '@/state/gamelists';
import { Typography, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, blueGrey } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import TableFooter from '@mui/material/TableFooter';
import { useEffect, useMemo } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import { rendering_id } from '@/state/rendering';
import { useNavigate } from 'react-router-dom';


function Row(props) {//列表子项
    const navigate = useNavigate();
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const setRenderId = useSetRecoilState(rendering_id);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.date} </TableCell>
                <TableCell align="right"><Avatar sx={{
                    bgcolor:
                        row.role == 'R' ? deepOrange[500] : row.role == 'B' ? deepPurple[500] : blueGrey[500]
                }}>{row.role}</Avatar></TableCell>
                <TableCell align="right"><Avatar sx={{
                    bgcolor:
                        row.result.winner == 'R' ? deepOrange[500] : row.result.winner == 'B' ? deepPurple[500] : blueGrey[500]
                }}>{row.result.winner}</Avatar></TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.official ? <CheckIcon /> : <ClearIcon />}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detail
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Role</TableCell>
                                        <TableCell>Rounds</TableCell>
                                        <TableCell align="right">Moves</TableCell>
                                        <TableCell align="right">Soldiers_total</TableCell>
                                        <TableCell align="right">Soldiers_killed</TableCell>
                                        <TableCell align="right">Grids_taken</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={'R'}>
                                        <TableCell ><Avatar sx={{
                                            bgcolor:
                                                deepOrange[500]
                                        }}>{'R'}</Avatar></TableCell>
                                        <TableCell component="th" scope="row">{row.result.r_stat.rounds}</TableCell>
                                        <TableCell align="right">{row.result.r_stat.moves}</TableCell>
                                        <TableCell align="right">{row.result.r_stat.soldiers_total}</TableCell>
                                        <TableCell align="right">{row.result.r_stat.soldiers_killed}</TableCell>
                                        <TableCell align="right">{row.result.r_stat.grids_taken}</TableCell>
                                    </TableRow>
                                    <TableRow key={'B'}>
                                        <TableCell ><Avatar sx={{
                                            bgcolor:
                                                deepPurple[500]
                                        }}>{'B'}</Avatar></TableCell>
                                        <TableCell component="th" scope="row">{row.result.b_stat.rounds}</TableCell>
                                        <TableCell align="right">{row.result.b_stat.moves}</TableCell>
                                        <TableCell align="right">{row.result.b_stat.soldiers_total}</TableCell>
                                        <TableCell align="right">{row.result.b_stat.soldiers_killed}</TableCell>
                                        <TableCell align="right">{row.result.b_stat.grids_taken}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Grid container spacing={2}>
                                <Grid item xs={10.5}> </Grid>

                                <Grid item xs={1.5}>
                                    <Button variant="contained" endIcon={<SendIcon />}
                                        onClick={() => { setRenderId(row.id); navigate("/battle"); }}>
                                        复盘
                                    </Button>
                                </Grid>
                            </Grid>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function GameList() {
    const gamelists = useRecoilValue(GameListsState);
    const setGameList = useSetRecoilState(GameListsState)
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);

    const offset = useMemo(() => {
        return (currentPage - 1) * rowsPerPage;
    }, [rowsPerPage, currentPage]);

    useEffect(() => {
        (async () => {
            try {
                const [gamelist] = await Promise.all(
                    [get_game_list(rowsPerPage, offset),]
                )
                setGameList(gamelist)
            }
            catch {
            }

        })()
    }, [offset, rowsPerPage]);

    const handleChangePageLeft = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleChangePageRight = () => {
        if (gamelists?.length == rowsPerPage) {
            setCurrentPage(currentPage + 1);
        }

    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1);

    }
    const handleChangePage = (event) => {
        setCurrentPage(parseInt(event.target.value));
        setRowsPerPage(rowsPerPage);
    }
    return (
        <Grid container >
            <TableContainer component={Paper} sx={{ boxShadow: 10 }} >
                <Table aria-label="collapsible table" >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><strong >Date</strong></TableCell>
                            <TableCell ><strong >Role</strong></TableCell>
                            <TableCell ><strong >Winner</strong></TableCell>
                            <TableCell align="right"><strong >Status</strong></TableCell>
                            <TableCell align="right"><strong >Official</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            gamelists?.map((row) => (
                                <Row key={row.id} row={row} />
                            ))}

                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={1} > </TableCell>
                            <TableCell colSpan={2}><Typography variant="h5" component="h5">Rows per page:
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    value={rowsPerPage}
                                    sx={{ width: '3ch' }}
                                    size="small"
                                    onChange={handleChangeRowsPerPage}
                                /></Typography>
                            </TableCell>
                            <TableCell colSpan={2}><Typography variant="h5" component="h5">Page:
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    sx={{ width: '3ch' }}
                                    size="small"
                                    value={currentPage}
                                    onChange={handleChangePage}
                                /></Typography>
                            </TableCell>
                            <TableCell colSpan={1}>
                                <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleChangePageLeft}>
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleChangePageRight}>
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableFooter >
                </Table>
            </TableContainer>
        </Grid >
    );
}
