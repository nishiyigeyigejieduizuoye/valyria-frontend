import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Markdown from './Component/Markdown';
import Grid from '@mui/material/Grid';

export default function Manual() {
    return (
        <Grid container >
            <CssBaseline />
            <Grid item xs={12} md={4}>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                            zIndex: "1",
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        {['开始之前', '基础概念', '游戏规则', '脚本API', '脚本开发环境'].map((text, index) => (
                            <List>

                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>

                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </List>

                        ))}
                    </Box>
                </Drawer>
            </Grid>
            <Grid item xs={12} md={8}>
                <Toolbar />
                <Typography paragraph>
                    <Markdown className="markdown" key={1}>
                        ..
                    </Markdown>

                </Typography>

            </Grid>
        </Grid>
    );
}