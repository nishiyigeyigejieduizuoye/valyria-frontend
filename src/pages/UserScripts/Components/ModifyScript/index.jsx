import Grid from '@mui/material/Unstable_Grid2';
import { Tooltip, IconButton, TextField } from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";
import "./index.css"
import { useState } from "react"
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { createScript, listScripts } from "@/api/scripts_api";
import useMessage from "@/hooks/useMessage";
import { ScriptsState } from "@/state/user";
import { useSetRecoilState } from "recoil";

function ModifyScript(param) {
  const [code, setCode] = param.codeState;
  const [name, setName] = param.nameState;
  const [loading, setLoading] = useState(false);
  const [, { addMessage }] = useMessage();
  const setScripts = useSetRecoilState(ScriptsState);

  const handleSave = () => {
    (async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        await createScript(name, code);
        addMessage("success", "保存成功");
      } catch (e) {
        addMessage("error", "保存失败：可能是脚本名重复");
      } finally {
        try {
          const scriptsList = await listScripts();
          setScripts(scriptsList);
        } catch (e) {
        } finally {
          setLoading(false);
        }
      }
    })();
  };

  return (
    <Grid
    direction="column"
    justifyContent="center"
    className="script-container"
    fullWidth
    >
      <Grid >
        <Grid item xs>新建脚本</Grid>
        <Grid item xs/>
        <Grid item xs={1}>
          <Tooltip title="保存">
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          </Tooltip>
        </Grid>
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
