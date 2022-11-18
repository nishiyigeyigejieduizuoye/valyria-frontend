
import * as React from 'react';
import { Box, Button, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { ScriptsState } from "@/state/user";
import { useRecoilValue } from "recoil";
import { useState } from 'react';
import { useCallback } from 'react';
import { generate_game } from "@/api/script_api";
import useMessage from "@/hooks/useMessage";
import { useNavigate } from "react-router-dom";
function SelectBox() {
  const navigate = useNavigate();
  const handleChange1 = (event) => {
    setName1(event.target.value)
  }
  const handleChange2 = (event) => {
    setName2(event.target.value)
  }
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const scripts = useRecoilValue(ScriptsState);
  const [, { addMessage }] = useMessage();
  const handClick = useCallback(
    async () => {
      try {
        console.log(name1, name2)
        await generate_game(name1, name2);
        addMessage("success", "生成成功")
        // navigate("/contest");
      } catch (e) {
        addMessage("error", "生成失败");
      } finally {
      }
    },
    [name1, name2]
  );
  return (
    <Grid >
      <Grid item xd={6}>
        <InputLabel id="demo-simple-select-helper-label">script name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={name1}
          label="R script name"
          onChange={handleChange1}
        >{scripts.map((script) => (
          <MenuItem key={script.name} value={script.name}>
            {script.name}
          </MenuItem >
        ))}
        </Select>
      </Grid>
      <Grid item md={6}>
        <InputLabel id="demo-simple-select-helper-label">script name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={name2}
          label="B script name"
          onChange={handleChange2}
        >{scripts.map((script) => (
          <MenuItem key={script.name} value={script.name}>
            {script.name}
          </MenuItem >
        ))}
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </Grid>
      <Button onClick={() => { navigate("/contest"); }}>返回</Button>
      <Button onClick={handClick}>确认</Button>
    </Grid >

  );
}
export default SelectBox;

