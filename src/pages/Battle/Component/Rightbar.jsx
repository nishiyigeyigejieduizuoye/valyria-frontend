import * as React from 'react';
import Typography from '@mui/material/Typography';
import { UserInfoState } from '@/state/user';
import { useRecoilValue } from 'recoil';
import { Avatar, ButtonGroup } from '@mui/material';
import { blue } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
export default function Rightbar() {
    const userInfo = useRecoilValue(UserInfoState);
    return (
        <>
            <Grid item xs={12} sm={8} md={2.5} component={Paper} elevation={2} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <Avatar alt="Avatar" src={"/api/user/" + userInfo?.data.id + "/avatar"} sx={{ width: 140, height: 140 }} />
                    <Typography component="h1" variant="h5">
                        {userInfo?.data.name}
                    </Typography>
                    <Typography >
                        积分:{userInfo?.data.rating}
                    </Typography>
                    <Typography >
                        脚本名:天下无敌
                    </Typography>

                </Box>
            </Grid>
        </>
    );
}
