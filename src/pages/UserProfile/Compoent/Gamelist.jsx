import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Grid from '@mui/material/Grid'
import { useRecoilValue } from "recoil";
import { GameListsState } from '@/state/gamelists';

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
// const gamelists = [//测试样例
//     createData(),
//     createData(),
//     createData(),
//     createData(),
//     createData(),
// ];

function preventDefault(event) {
    event.preventDefault();
}

export default function Gamesists() {
    const gamelists = useRecoilValue(GameListsState);
    return (
        <Grid>
            <Title>Recent Games</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Winner</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Official</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gamelists.filter((row, index) => (index < 5)).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.result.winner}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell align="right">{row.official}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                查看更多信息
            </Link>
        </Grid>
    );
}