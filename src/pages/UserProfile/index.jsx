import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from './Compoent/Chart';
import Rank from './Compoent/Rank';
import Gamelist from './Compoent/Gamelist';
import { Avatar, ButtonGroup } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useRecoilValue } from "recoil";
import { UserInfoState } from '@/state/user';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://docs.se.s8k.top/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const mdTheme = createTheme();

const UserProfile = () => {
    const userInfo = useRecoilValue(UserInfoState);
    return (
        <Grid container spacing={1} rowSpacing={3}>
            <Grid item md={9} >
                <ThemeProvider theme={mdTheme}>
                    <Box sx={{ display: 'flex' }}>
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                overflow: 'auto',
                            }}
                        >
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <Grid container spacing={3}>
                                    {/* Chart */}
                                    <Grid item xs={12} md={8} lg={9}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 240,
                                            }}
                                        >
                                            <Chart />
                                        </Paper>
                                    </Grid>
                                    {/* Rank*/}
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 240,
                                            }}
                                        >
                                            <Rank />
                                        </Paper>
                                    </Grid>
                                    {/* Gamelists*/}
                                    <Grid item xs={12}>
                                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                            <Gamelist />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ pt: 4 }} />
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Grid>

            <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Remy Sharp" src="" sx={{ width: 140, height: 140 }} />


                    <Typography component="h1" variant="h5">
                        {userInfo?.name}
                    </Typography>
                    <Typography >
                        <ListItemIcon>
                            <EmailIcon sx={{ color: blue[500], fontSize: 20, }} />Email:2581216@qq.com</ListItemIcon>
                    </Typography>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"

                    >
                        <Button key="one">修改密码</Button>
                        <Button key="two">修改头像</Button>

                    </ButtonGroup>
                </Box>
            </Grid>

        </Grid>

    );
}

export default UserProfile;

