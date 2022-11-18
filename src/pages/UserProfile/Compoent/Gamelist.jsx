import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Grid from '@mui/material/Grid'
import { useRecoilValue } from 'recoil';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { GameListsState } from "@/state/gamelists";
import moment from 'moment';
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, blueGrey } from "@mui/material/colors";
export default function Gamesists() {
    const gamelists = useRecoilValue(GameListsState);
    return (
        <Grid>
            <Title>Recent Games</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Date</strong></TableCell>
                        <TableCell><strong>Role</strong></TableCell>
                        <TableCell><strong>Winner</strong></TableCell>
                        <TableCell align="center"><strong>Status</strong></TableCell>
                        <TableCell align="right"><strong>Official</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gamelists.filter((row, index) => (index < 5)).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{moment(row.date * 1000).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                            <TableCell>
                                <Avatar
                                    sx={{
                                        bgcolor:
                                            row.role == "R"
                                                ? deepOrange[500]
                                                : row.role == "B"
                                                    ? deepPurple[500]
                                                    : blueGrey[500],
                                    }}
                                >
                                    {row.role}
                                </Avatar>
                            </TableCell>
                            <TableCell>
                                {row.result == null ? <></> : <Avatar
                                    sx={{
                                        bgcolor:
                                            row.result.winner == "R"
                                                ? deepOrange[500]
                                                : row.result.winner == "B"
                                                    ? deepPurple[500]
                                                    : blueGrey[500],
                                    }}
                                >
                                    {row.result.winner}
                                </Avatar>}
                            </TableCell>
                            <TableCell align="center">
                                <Chip
                                    label={
                                        row.status == "finished"
                                            ? "Finished"
                                            : row.status == "queue"
                                                ? "Queue"
                                                : "Running"
                                    }
                                    variant="outlined"
                                    color={
                                        row.status == "finished"
                                            ? "secondary"
                                            : row.status == "queue"
                                                ? "primary"
                                                : "warning"
                                    }
                                />
                            </TableCell>
                            <TableCell align="right">{row.official ? <CheckIcon /> : <ClearIcon />}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="/#/contest" sx={{ mt: 3 }}>
                查看更多信息
            </Link>
        </Grid>
    );
}