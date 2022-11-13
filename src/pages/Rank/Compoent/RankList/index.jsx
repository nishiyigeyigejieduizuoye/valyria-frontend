import * as React from 'react';
import { Grid, Divider, Typography, ListItemAvatar, ListItemText, ListItem, List, Avatar } from '@mui/material';
import { RankListsState } from "@/state/ranklists";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useMessage from "@/hooks/useMessage";
import { useCallback, useState } from 'react';
import { get_rank_list } from '@/api/rank_api';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
const RankList = () => {
    // const ranklists = [{ id: '1', name: 'zhaoda', email: '10000@qq.com', rating: 99 },
    // { id: '2', name: 'qianer', email: '10001@qq.com', rating: 98 },
    // { id: '3', name: 'sunsan', email: '10002@qq.com', rating: 97 },
    // { id: '4', name: 'lisi', email: '10003@qq.com', rating: 95 },
    // { id: '5', name: 'zhouwu', email: '10004@qq.com', rating: 93 },
    // { id: '6', name: 'wuliu', email: '10005@qq.com', rating: 92 },
    // { id: '7', name: 'zhenqi', email: '10006@qq.com', rating: 91 },
    // ];
    const ranklists = useRecoilValue(RankListsState);
    const setRankListState = useSetRecoilState(RankListsState);
    const [, { addMessage }] = useMessage();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const buttonSx = {
        ...(success && {
            bgcolor: blue[500],
            '&:hover': {
                bgcolor: blue[700],
            },
        }),
    };


    function handleClick() { onSubmit(); }
    const onSubmit = useCallback(
        async () => {
            if (!loading) {
                setSuccess(false);
                setLoading(true)
            }
            try {
                const [ranklist] = await Promise.all([
                    get_rank_list(),
                ]);
                setRankListState(ranklist);
                addMessage("success", "OK")
                setSuccess(true);
            } catch (e) {
                addMessage("error", "error");
                setSuccess(false);
            } finally {
                setLoading(false);
            }
        },
    );
    return (
        <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant="contained"
                        sx={buttonSx}
                        disabled={loading}
                        onClick={handleClick}
                        size="large"
                    >
                        Rank List
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: blue[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        sx={buttonSx}
                        onClick={handleClick}
                        size="small"
                    >
                        {success ? <CheckIcon /> : <RefreshIcon />}
                    </Fab>
                    {loading && (
                        <CircularProgress
                            size={50}
                            sx={{
                                color: blue[500],
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 1,
                            }}
                        />
                    )}
                </Box>

            </Box>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter((player, index) => index < 3).map((player, index) => (
                    <List key={player.id} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={player.id}>
                            <ListItemAvatar>
                                <Avatar alt={player.id} src={""}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                    }} />
                            </ListItemAvatar>
                            <ListItemText
                                key={player.id}
                                primary={index + 1 + (index + 1 == '1' ? 'st' : index + 1 == '2' ? 'nd' : 'rd')}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        ><ListItemIcon>
                                                <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />Name: {player.name}</ListItemIcon>
                                            <br />
                                            <ListItemIcon>
                                                <GradeOutlinedIcon sx={{ color: blue[500], fontSize: 20 }} />Rating :{player.rating}</ListItemIcon>
                                            <br />
                                            <ListItemIcon>
                                                <EmailIcon sx={{ color: blue[500], fontSize: 20, }} />Email:{player.email}</ListItemIcon>
                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>))
                }
            </Grid>
            <Grid container spacing={1} justifyContent="center" rowSpacing={0.5}>
                {ranklists.filter((player, index) => index >= 3).map((player, index) => (
                    <List key={player.id} sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start" key={player.id}>
                            <ListItemAvatar>
                                <Avatar variant="square"
                                    sx={{ bgcolor: 'background.paper', width: 100, height: 30 }}>
                                    <span style={{ color: 'black', fontSize: 30 }}>
                                        {index + 4}
                                        {index[-1] + 4 == '1' ? 'st' : index[-1] + 4 == '2' ? 'nd' : index[-1] + 4 == '3' ? 'rd' : 'th'}
                                    </span>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                key={player.id}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', align: 'center' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <ListItemIcon>
                                                <PersonIcon sx={{ color: blue[500], fontSize: 20 }} />
                                            </ListItemIcon>{player.name}
                                        </Typography>

                                        <Typography align="right">{player.rating}</Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>))
                }
            </Grid>
        </Grid >
    );
}
export default RankList;