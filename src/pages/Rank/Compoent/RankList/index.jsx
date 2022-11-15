import * as React from 'react';
import { Grid, Divider, Typography, ListItemAvatar, ListItemText, ListItem, List, Avatar } from '@mui/material';
import { RankListsState } from "@/state/ranklists";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useMessage from "@/hooks/useMessage";
import { useCallback, useState } from 'react';
import { get_rank_list } from '@/api/rank_api';
import { blue } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useEffect } from 'react';
const RankList = () => {
    const ranklists = useRecoilValue(RankListsState);
    const setRankListState = useSetRecoilState(RankListsState);
    useEffect(() => {
        (async () => {
            setRankListState(await get_rank_list())
        })()
    },);

    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter((player, index) => index < 3).map((player, index) => (
                    <List key={player.id} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={player.id}>
                            <ListItemAvatar>
                                <Avatar alt={player.id} src={""}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                    }} />
                            </ListItemAvatar>
                            <ListItemText
                                key={player.id}
                                primary={index + 1 + (index + 1 == '1' ? 'st' : index + 1 == '2' ? 'nd' : 'rd')}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        ><ListItemIcon>
                                                <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />Name: {player.name}</ListItemIcon>
                                            <br />
                                            <ListItemIcon>
                                                <GradeOutlinedIcon sx={{ color: blue[500], fontSize: 20 }} />Rating :{player.rating}</ListItemIcon>
                                            <br />
                                            <ListItemIcon>
                                                <EmailIcon sx={{ color: blue[500], fontSize: 20, }} />Email:{player.email}</ListItemIcon>
                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>))
                }
            </Grid>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter((player, index) => index >= 3).map((player, index) => (
                    <List key={player.id} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={player.id}>
                            <ListItemAvatar>
                                <Avatar variant="square"
                                    sx={{ bgcolor: 'background.paper', width: 100, height: 30 }}>
                                    <span style={{ color: 'black', fontSize: 30 }}>
                                        {index + 4}
                                        {index[-1] + 4 == '1' ? 'st' : index[-1] + 4 == '2' ? 'nd' : index[-1] + 4 == '3' ? 'rd' : 'th'}
                                    </span>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                key={player.id}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', align: 'center' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <ListItemIcon>
                                                <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />
                                            </ListItemIcon>{player.name}
                                        </Typography>

                                        <Typography align="right">{player.rating}</Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>))
                }
            </Grid>
        </Grid >
    );
}
export default RankList;