import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


export default function ChangePwdForm() {
    const [open, setOpen] = useState(false);
    const [currentPwd, setCurrentPwd] = useState(false)
    const [firstInput, setFirstInput] = useState(false)
    const [secondInput, setSecondInput] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handSubmit = () => {
        if (!currentPwd && !firstInput && !secondInput) {
            /*
            try:
                firstinput == secondinput?continue:log firstinput != secondinput
            try:
                currentpwd is true?reset useinfo;go to login page:currentpwd is incorrect
            */
        } else {
            /* log value =null*/
        }

    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                修改密码
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>修改密码</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        此操作将修改您的账号密码，若成功则需退出重新登录。
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="current pwd"
                        label="当前密码"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setCurrentPwd(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="new pwd"
                        label="新的密码"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setFirstInput(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="second pwd"
                        label="再次输入新的密码"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setSecondInput(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={handSubmit}>提交</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}