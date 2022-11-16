import Grid from '@mui/material/Unstable_Grid2';
import {
  Tooltip,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css"
import { useState } from "react"
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { createScript, listScripts, editScript, deleteScript } from "@/api/scripts_api";
import useMessage from "@/hooks/useMessage";
import { ScriptsState } from "@/state/user";
import { useSetRecoilState } from "recoil";

function ModifyScript(param) {
  const [code, setCode] = param.codeState;
  const [name, setName] = param.nameState;
  const [originName, setOriginName] = param.originState;
  const [loading, setLoading] = useState(false);
  const [, { addMessage }] = useMessage();
  const setScripts = useSetRecoilState(ScriptsState);

  const handleSave = () => {
    (async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      const operateScript = originName === null ? createScript : editScript;
      try {
        await operateScript(name, code, originName);
        setScripts(await listScripts());
        setOriginName(name);
        addMessage("success", "保存成功");
      } catch (e) {
        addMessage("error", "保存失败：可能是脚本名重复");
      } finally {
        setLoading(false);
      }
    })();
  };

  const handleDelete = (originName) => {
    (async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        await deleteScript(originName);
        setScripts(await listScripts());
        setOriginName(null);
        addMessage("success", "删除成功");
      } catch (e) {
        addMessage("error", "删除失败");
      } finally {
        setLoading(false);
      }
    })();
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  let dialog = (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>确认删除</DialogTitle>
      <DialogContent>是否确认删除</DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            handleDelete(originName);
            setDialogOpen(false);
          }}
        >
          确认
        </Button>
        <Button onClick={() => setDialogOpen(false)}>取消</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Grid
    direction="column"
    justifyContent="center"
    className="script-container"
    fullWidth
    >
      <Grid>
        <Grid item xs>{originName === null ? "新建脚本" : "编辑脚本"}</Grid>
        <Grid item xs={1}>
          <Tooltip title="保存">
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        { originName === null ? <></> :
        <>
          <Grid item xs={1}>
            <Tooltip title="删除">
              <IconButton onClick={() => setDialogOpen(true)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          {dialog}
        </>
        }
      </Grid>
      <Grid item xs={12} lg={3}>
        <TextField
          variant="filled"
          label="脚本名"
          name="script_name"
          type="text"
          value={name}
          onChange={(arg) => { setName(arg.target.value); }}
        />
      </Grid>
      <Grid>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 18,
          }}
        />
      </Grid>
    </Grid>
  );
}
export default ModifyScript;
