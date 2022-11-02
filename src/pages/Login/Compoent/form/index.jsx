import * as React from 'react';
import { Button, Autocomplete, Grid, TextField, Stack } from '@mui/material';
const record = [{ username: 'chenyuhao' },];
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
                    <Autocomplete
                        id="login-username"
                        freeSolo
                        options={record.map((option) => option.username)}
                        renderInput={(params) => <TextField {...params} required label="Username" />}
                    />
                    <TextField
                        required
                        id="login-password"
                        label="Password"
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

                    />
                    <TextField
                        required
                        id="sign-up-password"
                        label="Password"
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