import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Rank</Title>
            <Typography component="p" variant="h4">
                100
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 2 }}>
            </Typography>
            <Typography color="text.secondary" variant="h11" sx={{ flex: 1 }}>
                截止时间:
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    查看更多信息
                </Link>
            </div>
        </React.Fragment>
    );
}