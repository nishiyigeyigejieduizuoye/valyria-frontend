import ModifyScript from "./Components/ModifyScript"
import { ScriptsState } from "@/state/user";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react"
import Grid from '@mui/material/Unstable_Grid2';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NotesIcon from "@mui/icons-material/Notes";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

function UserScripts() {
  const scripts = useRecoilValue(ScriptsState);
  const [name, setName] = useState('');
  const [code, setCode] = useState('function add(a, b) {\n  return a + b;\n}');
  const [originName, setOriginName] = useState(null);

  return (
    <Grid>
      <Grid>
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
              <ListItemButton onClick={() => {
                setOriginName(null);
                setName('');
                setCode('function add(a, b) {\n  return a + b;\n}');
              }}>
                <ListItemIcon>
                  <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="新建脚本" />
              </ListItemButton>
            </ListItem>
            <Divider />
            {scripts.map((m) => (
              <ListItem key={m.name}>
                <ListItemButton onClick={() => {
                  setOriginName(m.name);
                  setName(m.name);
                  setCode(m.code);
                }}>
                  <ListItemIcon>
                    <NotesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={m.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>

      <Grid
        fullWidth
        sx={{
          paddingLeft: {
            xs: 0,
            sm: "310px",
          },
        }}
      >
        <ModifyScript nameState={[name, setName]} codeState={[code, setCode]} originState={[originName, setOriginName]}/>
      </Grid>
    </Grid>
  );
}
export default UserScripts;
