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
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import useMessage from "@/hooks/useMessage";
function createData() {
    return {
        id: "123",
        role: "R",
        date: 2002,
        status: "queue",
        official: "boolean",
        result: {
            winner: "R",
            r_stat: {
                rounds: 123,
                moves: 256,
                soldiers_total: 789,
                soldiers_killed: 123,
                grids_taken: 123,
            },
            b_stat:
            {
                rounds: 123,
                moves: 456,
                soldiers_total: 789,
                soldiers_killed: 874,
                grids_taken: 564,
            },
        },
    };
}
const gamelists = [//测试样例
    createData(),

];

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

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
                        row.role == 'R' ? deepOrange[500] : deepPurple[500]
                }}>{row.role}</Avatar></TableCell>
                <TableCell align="right"><Avatar sx={{
                    bgcolor:
                        row.result.winner == 'R' ? deepOrange[500] : deepPurple[500]
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
                                    <Button variant="outlined" >复盘</Button>
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
    // const gamelists = useRecoilValue(GameListsState);
    const setGameListsState = useSetRecoilState(GameListsState)
    const [, { addMessage }] = useMessage();
    const [limit, setLimit] = useState("");
    const [offset, setOffset] = useState("");
    function handleClick() {
        onSubmit();
    }
    const onSubmit = useCallback(
        async () => {
            try {

                const [gamelist] = await Promise.all([
                    get_game_list(limit, offset),
                ]);
                addMessage("success", "OK");
                setGameListsState(gamelist);
            } catch (e) {
                addMessage("error", "error");
            } finally {
            }
        },

    );
    return (
        <Grid container sx={{ height: 0, width: 800 }} >
            <Grid container spacing={2}>
                <Grid item xs={7.5}> </Grid>
                <Grid item xs={1.5}>
                    <TextField id="limit" label="limit" size="small" sx={{ width: '10ch' }}
                        onChange={(e) => {
                            setLimit(e.target.value)
                        }} />
                </Grid>
                <Grid item xs={1.5}>
                    <TextField id="offset" label="offset" size="small" sx={{ width: '10ch' }}
                        onChange={(e) => {
                            setOffset(e.target.value)
                        }} />
                </Grid>
                <Grid item xs={1.5}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>查询</Button>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
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
                        {gamelists?.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid >
    );
}