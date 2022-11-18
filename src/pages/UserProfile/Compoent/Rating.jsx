import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { UserInfoState } from '@/state/user';
import { useRecoilValue } from 'recoil';

export default function Deposits() {
    const userInfo = useRecoilValue(UserInfoState);
    return (
        <React.Fragment>
            <Title>Rating</Title>
            <Typography component="p" variant="h1">
                {userInfo?.data.rating}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 2 }}>
            </Typography>

            <div>
                <Link color="primary" href="/#/rank">
                    查看更多信息
                </Link>
            </div>
        </React.Fragment>
    );
}