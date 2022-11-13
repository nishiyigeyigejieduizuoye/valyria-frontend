import { FormEvent, useCallback, useState } from 'react';
import "./index.css";
import { login, register, getUserInfo } from "@/api/login_api";
import { UserInfoState } from '@/state/user';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil"
import useMessage from "@/hooks/useMessage";

function Login() {
  const navigate = useNavigate();
  const [loginloading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPswd, setConfPswd] = useState("");
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [, { addMessage }] = useMessage();

  const loginClick = useCallback(
    async () => {
      setLoginLoading(true);
      try {
        await login(email, password);
        const [userInfo] = await Promise.all([
          getUserInfo(),
          // getAvatar(), // TODO
        ]);
        setUserInfo(userInfo);
        addMessage("success", "登录成功")
        navigate("/");
      } catch (e) {
        addMessage("error", "登录失败：用户名或密码错误");
      } finally {
        setLoginLoading(false);
      }
    },
    [email, password, setLoginLoading]
  );

  function toRegisterClick() {
    setRegistering(true);
  }

  const registerClick = useCallback(
    async () => {
      if(password != confPswd) {
        addMessage("error", "注册失败：密码与确认密码不同");
      }else {
        setRegisterLoading(true);
        try {
          await register(username, email, password);
          setRegistering(false)
          addMessage("success", "注册成功：请尝试登录")
        } catch (e) {
          addMessage("error", "注册失败：邮箱密码不合法或用户名邮箱重复");
        } finally {
          setRegisterLoading(false);
        }
      }
    },
    [username, email, password, confPswd, setRegisterLoading]
  );

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="login-page-container"
    >
      { registering ?
      <Grid item xs={12} lg={3}>
        <TextField
          variant="outlined"
          label="用户名"
          name="email"
          type="text"
          fullWidth
          value={username}
          onChange={(arg) => {setUsername(arg.target.value);}}
        />
      </Grid> : <></>
      }

      <Grid item xs={12} lg={3}>
        <TextField
          variant="outlined"
          label="邮箱"
          name="email"
          type="text"
          fullWidth
          value={email}
          onChange={(arg) => {setEmail(arg.target.value);}}
        />
      </Grid>

      <Grid item xs={12} lg={3}>
        <TextField
          variant="outlined"
          label="密码"
          name="password"
          type="password"
          fullWidth
          value={password}
          onChange={(arg) => {setPassword(arg.target.value);}}
        />
      </Grid>

      { registering ? 
      <Grid item xs={12} lg={3}>
        <TextField
          variant="outlined"
          label="确认密码"
          name="confirm_password"
          type="password"
          fullWidth
          value={confPswd}
          onChange={(arg) => {setConfPswd(arg.target.value);}}
        />
      </Grid> : <></>
      }

      { registering ? <></> :
      <Grid item xs={12} lg={3}>
        <LoadingButton
        loading={loginloading}
        variant="contained"
        fullWidth
        onClick={loginClick}
        >
          登录
        </LoadingButton>
      </Grid>
      }
      
      <Grid item xs={12} lg={3}>
        <LoadingButton
        loginloading={registerLoading}
        variant={registering ? "contained" : "outlined"}
        onClick={registering ? registerClick : toRegisterClick}
        fullWidth
        >
          注册
        </LoadingButton>
      </Grid>

      { registering ?
      <Grid item xs={12} lg={3}>
        <LoadingButton
        variant="outlined"
        fullWidth
        onClick={() => {setRegistering(false);}}
        >
          返回登录
        </LoadingButton>
      </Grid> : <></>
      }
    </Grid>
  );
}
export default Login;