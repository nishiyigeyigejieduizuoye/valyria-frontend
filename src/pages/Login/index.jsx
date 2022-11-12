import { FormEvent, useCallback, useState } from 'react';
import "./index.css";
import { login, getUserInfo } from "@/api/api"
import { UserInfoState } from '@/state/user';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil"
import useMessage from "@/hooks/useMessage";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [, { addMessage }] = useMessage();

  function handleClick() {
    onSubmit();
  }
  const onSubmit = useCallback(
    async () => {
      setLoading(true);
      try {
        await login(email, password);
        const [userInfo] = await Promise.all([
          getUserInfo(),
          // getAvatar(), // TODO
        ]);
        setUserInfo(userInfo);
        navigate("/");
      } catch (e) {
        addMessage("error", "登录失败：用户名或密码错误");
      } finally {
        setLoading(false);
      }
    },
    [email, password, setLoading]
  );

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      component="div"
      className="login-page-container"
    >
      <Grid item xs={12} lg={3}>
        <TextField
          variant="outlined"
          label="邮箱"
          name="email"
          type="text"
          fullWidth
          required
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
          required
          value={password}
          onChange={(arg) => {setPassword(arg.target.value);}}
        />
      </Grid>

      <Grid item xs={12} lg={3}>
        <LoadingButton
        loading={loading}
        variant="contained"
        fullWidth
        onClick={handleClick}
        type="submit"
        >
          登录
        </LoadingButton>
      </Grid>
      
      <Grid item xs={12} lg={3}>
        <LoadingButton
        loading={false}
        variant="outlined"
        fullWidth
        >
          注册
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
export default Login;