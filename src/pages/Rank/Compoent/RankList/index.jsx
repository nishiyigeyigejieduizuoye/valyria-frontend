import * as React from 'react';
import { Grid, Divider, ListItemAvatar, ListItemText, ListItem, List, Avatar } from '@mui/material';
import { RankListsState } from "@/state/ranklists";
import { useRecoilValue } from "recoil";
import { blue } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
const RankList = () => {
    const ranklists = useRecoilValue(RankListsState);
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={0.5} component="div">
            {ranklists.filter((player, index) => index < 3).map((player, index) => (
                <List key={player.id} sx={{ boxShadow: 10, width: '100%', maxWidth: 800, bgcolor: 'background.paper' }} component="div" >
                    <ListItem disablePadding alignItems="flex-start" component="span" >
                        <ListItemAvatar>
                            <Avatar alt={player.id} src={"/api/user/" + player.id + "/avatar"}
                                sx={{
                                    width: 120,
                                    height: 120,
                                }} />
                        </ListItemAvatar>
                        <ListItemText
                            key={player.id}
                            primary={<h1><strong><i>{index + 1 + (index + 1 == '1' ? 'st' : index + 1 == '2' ? 'nd' : 'rd')}</i></strong></h1>}
                            secondary={

                                <span>
                                    <PersonIcon sx={{ color: blue[500], fontSize: 15 }} ></PersonIcon><strong>Name:</strong> {player.name}
                                    <br />
                                    <GradeOutlinedIcon sx={{ color: blue[500], fontSize: 15 }} ></GradeOutlinedIcon><strong>Rating:</strong>{player.rating}
                                    <br />
                                    <EmailIcon sx={{ color: blue[500], fontSize: 15, }} ></EmailIcon><strong>Email:</strong>{player.email}
                                </span>
                            }
                        />
                        <Avatar alt={player.id} src={"src/pages/Rank/Compoent/trophy/" + (index == 0 ? "first" : index == 1 ? "second" : "third") + ".svg"}
                            sx={{
                                width: 120,
                                height: 120,
                            }} />
                    </ListItem>

                </List>
            )
            )}
            {ranklists.filter((player, index) => index >= 3).map((player, index) => (
                <List key={player.id} sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', boxShadow: 10 }}>
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

                                    <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />

                                    {player.name}
                                </span>
                            }
                        />
                        <ListItemAvatar>
                            <Avatar variant="square"
                                sx={{ bgcolor: 'background.paper', width: 100, height: 30 }}>
                                <span style={{ color: 'black', fontSize: 30 }}>
                                    {player.rating}
                                </span>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                </List>))
            }
        </Grid >
    );

}
export default RankList;