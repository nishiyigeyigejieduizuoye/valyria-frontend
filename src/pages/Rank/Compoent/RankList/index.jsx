import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Box, Grid, ButtonGroup, List, ListItem, ListItemText } from "@mui/material";
const ranklists = [
    { rank: 1, name: 'Game1', rating: '4' },
    { rank: 2, name: 'Game2', rating: '5' },
    { rank: 3, name: 'Game2', rating: '5' },
]
const RankList = () => {
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={5}>
            <Grid item xs={12}></Grid>
            <List sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
                {ranklists.map((playlist) => (
                    <ListItem key={playlist.rank}>
                        <ListItemText
                            rank={playlist.rank}
                            name={playlist.name}
                            rating={playlist.rating}
                        ></ListItemText>
                    </ListItem>
                ))}

            </List>

        </Grid>

    );
}
export default RankList;