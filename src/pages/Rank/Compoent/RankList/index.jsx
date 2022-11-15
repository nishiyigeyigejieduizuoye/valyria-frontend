import * as React from 'react';
import { Grid, Divider, Typography, ListItemAvatar, ListItemText, ListItem, List, Avatar } from '@mui/material';
import { RankListsState } from "@/state/ranklists";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { get_rank_list } from '@/api/rank_api';
import { blue } from '@mui/material/colors';
import { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box'
const RankList = () => {
    const ranklists = useRecoilValue(RankListsState);
    const setRankListState = useSetRecoilState(RankListsState);
    useEffect(() => {
        (async () => {
            try {
                const [ranklist] = await Promise.all(
                    [get_rank_list(),]
                )
                setRankListState(ranklist)
            }
            catch {
            }

        })()
    });
    return (

        <Grid container spacing={1} justifyContent="center" rowSpacing={0.5} component="div">
            {ranklists.filter((player, index) => index < 3).map((player, index) => (
                <List key={player.id} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }} component="div">

                    <ListItem alignItems="flex-start" component="span" >
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

                                <span>
                                    <PersonIcon sx={{ color: blue[500], fontSize: 15 }} ></PersonIcon>Name: {player.name}
                                    <br />
                                    <GradeOutlinedIcon sx={{ color: blue[500], fontSize: 15 }} ></GradeOutlinedIcon>  Rating :{player.rating}
                                    <br />
                                    <EmailIcon sx={{ color: blue[500], fontSize: 15, }} ></EmailIcon>Email:{player.email}
                                </span>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            )
            )}
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
                                <span>
                                    <ListItemIcon component="p">
                                        <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />
                                    </ListItemIcon>{player.name}

                                    <span align="right" component="span">{player.rating}</span>
                                </span>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>))
            }
        </Grid >
    );

}
export default RankList;