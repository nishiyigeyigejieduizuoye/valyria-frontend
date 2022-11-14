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
import { UserInfoState, LoadingUserInfoState } from '@/state/user';
import { useRecoilState } from 'recoil';
import { logout } from "@/api/login_api";

function AppBarButton(param) {
  return (
    <Button color="inherit" component={Link} to={param.to} size="large" onClick={param.onClick}
      sx = {{ 
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'Sans-serif',
        fontWeight: 500,
        color: 'inherit',
        marginLeft: param.rightSide ? "auto" : 0
      }}
    >{param.content}</Button>
  )
}

function SiteAppBar() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [loading] = useRecoilState(LoadingUserInfoState);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await logout();
    setUserInfo(null);
    handleClose();
  };

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
        <AppBarButton content="主页" to="/"/>
        <AppBarButton content="赛事大厅" to="/contest"/>
        <AppBarButton content="排行榜" to="/rank"/>
        <AppBarButton content="历史记录" to="history"/>
        <AppBarButton content="战斗页面（开发者入口）" to="/battle"/>
        { loading ? <></> : ( userInfo === null ? 
          <AppBarButton content="登录 / 注册" rightSide to="/login"/>
        :
          <AppBarButton content={userInfo.data.name} rightSide onClick={handleClick}/>
        )}
      </Toolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
export default SiteAppBar;
