import * as React from 'react';
import "./index.css";
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

function Login() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

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
          label="用户名"
          name="username"
          type="text"
          fullWidth
          required
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
        />
      </Grid>

      <Grid item xs={12} lg={3}>
        <LoadingButton
        loading={false}
        variant="contained"
        fullWidth
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