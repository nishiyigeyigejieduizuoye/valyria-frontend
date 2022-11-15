import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Grid from '@mui/material/Grid'
import { get_game_list } from '@/api/game_api';
import { useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
export default function Gamesists() {
    useEffect(() => {
        (async () => {
            try {
                const [gamelist] = await Promise.all(
                    [get_game_list(),]
                )
                setGamelists(gamelist)
            }
            catch {
            }
        })()
    });
    const [gamelists, setGamelists] = React.useState([]);
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