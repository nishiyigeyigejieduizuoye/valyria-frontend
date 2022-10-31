import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../menubar';
import RankList from './Compoent/RankList';

import { Button, Box, Grid, ButtonGroup, List, ListItem, ListItemText } from "@mui/material";

const Rank = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuBar />
            <RankList />
        </Box >

    );
}
export default Rank;