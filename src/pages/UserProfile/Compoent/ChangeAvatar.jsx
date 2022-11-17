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
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                修改头像
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改头像</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        请选择需要上传的头像路径
                    </DialogContentText>
                    <form action="/api/user/avatar" method="POST" encType="multipart/form-data">
                        <input type="file" name="avatar" />
                        <input type="submit" name="上传" />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={handleClose}>提交</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}