import * as React from 'react';
import { Button, Box, Grid, TextField, Stack } from '@mui/material';
const Form = () => {
    return (

        <Grid container spacing={3} alignItems="center" justifyContent="center" rowSpacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Stack component="form"
                    sx={{
                        width: '40ch',
                        margin: 0,
                    }}
                    spacing={2}
                    noValidate
                >
                    <TextField
                        required
                        id="login-username"
                        label="Username"
                        defaultValue="Username"
                        size='small'

                    />
                    <TextField
                        required
                        id="login-password"
                        label="Password"
                        defaultValue="Password"
                        size='small'
                        type="password"
                    />
                </Stack>

            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Stack component="form"
                    sx={{
                        width: '40ch',
                        margin: 0,
                    }}
                    spacing={2}
                    noValidate
                >
                    <TextField
                        required
                        id="sign-up-username"
                        label="Username"
                        defaultValue="Username"
                        size='small'
                    />
                    <TextField
                        required
                        id="sign-up-password"
                        label="Password"
                        defaultValue="Password"
                        size='small'
                        type="password"
                    />
                </Stack>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}><Button variant="contained">Login</Button></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}><Button variant="contained">Sign up</Button></Grid>

        </Grid>
    );
}
export default Form;