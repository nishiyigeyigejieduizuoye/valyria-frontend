
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import { ScriptsState } from "@/state/user";
import { useRecoilValue } from "recoil";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
function SelectBox() {
  const handleChange = () => {

  }
  const code = '1'
  const scripts = useRecoilValue(ScriptsState);
  return (
    <Grid sx={{ flexGrow: 10 }}>
      <InputLabel id="demo-simple-select-helper-label">script name</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={1}
        label="script name"
        onChange={handleChange}
      >{scripts.map((m) => (
        <ListItem key={m.name}>

          <ListItemText
            primary={m.name}
          />
        </ListItem>
      ))}
      </Select>
      {/* <FormHelperText>With label + helper text</FormHelperText> */}
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
    </Grid >

  );
}
export default SelectBox;

