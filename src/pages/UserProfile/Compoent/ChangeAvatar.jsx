import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import useMessage from "@/hooks/useMessage";
import { useCallback } from 'react';
import { post_user_avatar } from "@/api/avatar_api"
import Grid from '@mui/material/Grid'


export default function ChangeAvatar() {
    const [open, setOpen] = useState(false);
    const [Avatar, setavatar] = useState(false)
    const [, { addMessage }] = useMessage();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = useCallback(
        async () => {
            try {
                await post_user_avatar(Avatar);
                addMessage("success", "修改成功")
            } catch (e) {
                addMessage("error", "修改失败");
            } finally {

            }
        },
        [Avatar,]
    );

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                修改头像
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改头像</DialogTitle>
                <Grid
                    component="form"
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    onSubmit={handleClick}
                >
                    <DialogContent>
                        <DialogContentText>
                            请选择需要上传的头像路径
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            type="file"
                            fullWidth
                            variant="standard"
                            onChange={(e) => { setavatar(e.target.value) }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>取消</Button>
                        <Button type="submit">提交</Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </div>
    );
}