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
            <Title>近期比赛</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>游戏时间</strong></TableCell>
                        <TableCell><strong>游戏结果</strong></TableCell>
                        <TableCell align="center"><strong>游戏状态</strong></TableCell>
                        <TableCell align="right"><strong>游戏类别</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gamelists.filter((row, index) => (index < 5)).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{moment(row.date * 1000).format("YYYY-MM-DD HH:mm:ss")}</TableCell>

                            <TableCell>
                                {row.result == null ? <></> : row.result.winner == 'R' ?
                                    <strong><p style={{ color: "blue", fontFamily: '楷体', letterSpacing: 15, fontSize: 15 }} >胜利</p></strong>
                                    : <strong><p style={{ color: "red ", fontFamily: '楷体', letterSpacing: 15, fontSize: 15 }} >失败</p></strong>}
                            </TableCell>
                            <TableCell align="center">
                                <Chip
                                    label={
                                        row.status == "finished"
                                            ? "已完成"
                                            : row.status == "queue"
                                                ? "等待中"
                                                : "进行中"
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
                            <TableCell align="right"> {row.offical ?
                                <p>排位赛</p>
                                : <p>常规赛</p>}</TableCell>
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