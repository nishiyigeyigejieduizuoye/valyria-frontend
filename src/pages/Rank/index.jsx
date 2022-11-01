import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import RankList from './Compoent/RankList';

import { Box } from "@mui/material";

const Rank = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <RankList />
        </Box >

    );
}
export default Rank;