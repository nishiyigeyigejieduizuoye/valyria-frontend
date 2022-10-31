import * as React from 'react';
import { 
  AppBar,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Button
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const default_button_sx = {
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'Sans-serif',
  fontWeight: 500,
  color: 'inherit',
}

function SiteAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar position = "relative" sx = {{ zIndex: "10" }}>
      <Toolbar>
        <Typography
          variant = "h6"
          noWrap
          component = "a"
          href = "/"
          sx = {{
            mr: 6,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 1000,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          onClick={() => { navigate("/"); }}
        >
          Valyria
        </Typography>
        <></>
        <Button color="inherit" component={Link} to="/" size="large"
          sx = { default_button_sx }
        >
          主页
        </Button>
        <Button color="inherit" component={Link} to="/contest" size="large"
          sx = { default_button_sx }
        >
          赛事大厅
        </Button>
        <Button color="inherit" component={Link} to="/rank" size="large"
          sx = { default_button_sx }
        >
          排行榜
        </Button>
        <Button color="inherit" component={Link} to="/history" size="large"
          sx = { default_button_sx }
        >
          历史记录
        </Button>
        <Button color="inherit" component={Link} to="/battle" size="large"
          sx = { default_button_sx }
        >
          战斗页面（开发者入口）
        </Button>

        <Button color="inherit" component={Link} to="/login" size="large"
          sx = {{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 500,
            color: 'inherit',
            marginLeft: "auto",
          }}
        >
          登录 / 注册
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default SiteAppBar;
