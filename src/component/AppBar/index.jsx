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
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 600,
            color: 'inherit',
          }}
        >
          主页
        </Button>
        <Button color="inherit" component={Link} to="/Contest" size="large"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 600,
            color: 'inherit',
          }}
        >
          赛事大厅
        </Button>
        <Button color="inherit" component={Link} to="/Rank" size="large"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 600,
            color: 'inherit',
          }}
        >
          排行榜
        </Button>
        <Button color="inherit" component={Link} to="/Battle" size="large"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 600,
            color: 'inherit',
          }}
        >
          战斗记录
        </Button>
        <div />
        <Button color="inherit" component={Link} to="/Login" size="large"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 600,
            color: 'inherit',
            marginLeft: "auto"
          }}
        >
          登录 / 注册
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default SiteAppBar;
