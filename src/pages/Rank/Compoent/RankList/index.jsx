import * as React from 'react';
import { Grid, Divider, Typography, ListItemAvatar, ListItemText, ListItem, List, Avatar } from '@mui/material';
import { RankListsState } from "../../../../state/ranklists";
import { useRecoilValue } from "recoil";
const RankList = () => {
    const ranklists = useRecoilValue(RankListsState);
    //
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter(playlist => playlist.rank <= 3).map((playlist) => (
                    <List key={playlist.rank} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={playlist.rank}>
                            <ListItemAvatar>
                                <Avatar alt={playlist.rank} src={playlist.Avatar}
                                    sx={{
                                        width: 100,
                                        height: 100,

                                    }} />
                            </ListItemAvatar>
                            <ListItemText
                                key={playlist.rank}
                                primary={playlist.rank + (playlist.rank == '1' ? 'st' : playlist.rank == '2' ? 'nd' : 'rd')}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            name: {playlist.name}
                                            <br />
                                            Rating :{playlist.rating}
                                        </Typography>
                                        <br />
                                        introduction:{playlist.introduction}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>))
                }
            </Grid>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter(playlist => playlist.rank > 3).map((playlist) => (
                    <List key={playlist.rank} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={playlist.rank}>
                            <ListItemAvatar>
                                <Avatar variant="square"
                                    sx={{ bgcolor: 'background.paper', width: 100, height: 30 }}>
                                    <span style={{ color: 'black', fontSize: 30 }}>
                                        {playlist.rank}
                                        {playlist.rank.substr(-1) == '1' ? 'st' : playlist.rank.substr(-1) == '2' ? 'nd' : playlist.rank.substr(-1) == '3' ? 'rd' : 'th'}
                                    </span>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                key={playlist.rank}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', align: 'center' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {playlist.name}
                                        </Typography>
                                        <div align='right'>{playlist.rating}</div>

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