import * as React from 'react';
import Title from './Title';
import { ScriptsState } from "@/state/user";
import { useRecoilValue } from 'recoil';
import Select from '@mui/material/Select';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Grid } from '@mui/material'
import { get_competition, post_competition } from "@/api/battle_api";
import { useEffect } from 'react';
import useMessage from "@/hooks/useMessage";
import { useCallback } from 'react';
export default function Setting() {
    const scripts = useRecoilValue(ScriptsState);
    const [, { addMessage }] = useMessage();
    const [involved, setInvolved] = useState(false);
    const [scriptName, setScriptName] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        (async () => {
            try {
                const [CompetitionStatus] = await Promise.all([
                    get_competition(),
                ]);

                setInvolved(CompetitionStatus.data.involved), setScriptName(CompetitionStatus.data.scriptName);
            } catch (e) {
            } finally {
            }
        })();
    });
    const handClick1 = useCallback(
        async () => {
            try {
                console.log(name)
                await post_competition(null);
                addMessage("success", "修改成功")
            } catch (e) {
                console.log(e)
                addMessage("error", "修改失败");
            } finally {
            }
        }, [name]
    );
    const handClick2 = useCallback(
        async () => {
            try {

                involved ? setName('') : setName(name);
                await post_competition(name);
                addMessage("success", "成功")
            } catch (e) {
                addMessage("error", "失败");
            } finally {
            }
        }, [name]
    );
    return (
        <React.Fragment>
            <Title>{involved ? '已参与排位' : '未参与排位'}</Title>
            <Grid container justifyContent="center" >
                <Grid item md={2}><h4>脚本:</h4></Grid>
                <Grid item md={9}>
                    <Select
                        displayEmpty
                        id="Bscript"
                        value={name}
                        sx={{ m: 1, minWidth: 250 }}
                        onChange={(e) => { setName(e.target.value) }}
                    >{scripts.map((script) => (
                        <MenuItem key={script.name} value={script.name}>
                            {script.name}
                        </MenuItem >
                    ))}
                    </Select>
                </Grid>
            </Grid >
            {involved ? <Button onClick={handClick1}>修改脚本</Button> : <></>}
            <Button onClick={handClick2}>{involved ? '退出排位' : '参与排位'}</Button>


        </React.Fragment >
    );
}