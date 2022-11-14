import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";
import { ScriptsState } from "@/state/user";
import { useRecoilValue } from "recoil";
function SideList() {
  // const navigate = useNavigate();
  const scripts = useRecoilValue(ScriptsState);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "300px",
          zIndex: "1",
        },
      }}
      open
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={() => {}}>
            <ListItemIcon>
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary="新建脚本" />
          </ListItemButton>
        </ListItem>
        <Divider />
        {/* {memos.map((m) => (
          <ListItem key={m.id}>
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText
                primary={m.title}
                secondary={new Date(m.lastModified).toLocaleString()}
              />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Drawer>
  );
}
export default SideList;
