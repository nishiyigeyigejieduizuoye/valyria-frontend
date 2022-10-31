import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../menubar';
const Home = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuBar />
        </Box >
    );
}
export default Home;