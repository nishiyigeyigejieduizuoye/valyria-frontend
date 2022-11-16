import * as React from 'react';
import Typography from '@mui/material/Typography';
import { UserInfoState } from '@/state/user';
import { useRecoilValue } from 'recoil';
import { Avatar, ButtonGroup } from '@mui/material';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
export default function Rightbar() {
    const userInfo = useRecoilValue(UserInfoState);
    return (
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
                    {userInfo?.data.name}
                </Typography>
                <Typography >

                    <EmailIcon sx={{ color: blue[500], fontSize: 20, }} />Email: {userInfo?.data.email}
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
    );
}
