import * as React from 'react';
import { Button, Box, Grid, TextField, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../menubar';
import Form from './Compoent/form'
const Login = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuBar />
            <Form />
        </Box>
    );
}
export default Login;