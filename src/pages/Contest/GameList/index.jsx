import * as React from "react";
import { useCallback, useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Collapse,
  IconButton,
} from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { get_game_list } from "@/api/game_api";
import { GameListsState } from "@/state/gamelists";
import {
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, blueGrey } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import TableFooter from "@mui/material/TableFooter";
import { useEffect, useMemo } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from 'moment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import { generate_game } from "@/api/script_api";
import Select from '@mui/material/Select';
import { ScriptsState } from "@/state/user";
import useMessage from "@/hooks/useMessage";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Row(props) {
  //列表子项
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="justify">
          <Chip icon={<AccessTimeIcon />} label={moment(row.date * 1000).format("YYYY-MM-DD HH:mm:ss")} />{" "}
        </TableCell>
        <TableCell align="right">
          <Avatar
            sx={{
              bgcolor:
                row.role == "R"
                  ? deepOrange[500]
                  : row.role == "B"
                    ? deepPurple[500]
                    : blueGrey[500],
            }}
          >
            {row.role}
          </Avatar>
        </TableCell>
        <TableCell align="right">
          {row.result == null ? <></> : <Avatar
            sx={{
              bgcolor:
                row.result.winner == "R"
                  ? deepOrange[500]
                  : row.result.winner == "B"
                    ? deepPurple[500]
                    : blueGrey[500],
            }}
          >
            {row.result.winner}
          </Avatar>}

        </TableCell>
        <TableCell align="center">
          <Chip
            label={
              row.status == "finished"
                ? "Finished"
                : row.status == "queue"
                  ? "Queue"
                  : "Running"
            }
            variant="outlined"
            color={
              row.status == "finished"
                ? "secondary"
                : row.status == "queue"
                  ? "primary"
                  : "warning"
            }
          />
        </TableCell>
        <TableCell align="center">
          {row.official ? <CheckIcon /> : <ClearIcon />}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Role</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Rounds</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Moves</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Soldiers_total</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Soldiers_killed</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Grids_taken</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={"R"}>
                    <TableCell>
                      <Avatar
                        sx={{
                          bgcolor: deepOrange[500],
                        }}
                      >
                        {"R"}
                      </Avatar>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.result == null ? " " : row.result.r_stat.rounds}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.r_stat.moves}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.r_stat.soldiers_total}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.r_stat.soldiers_killed}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.r_stat.grids_taken}
                    </TableCell>
                  </TableRow>
                  <TableRow key={"B"}>
                    <TableCell>
                      <Avatar
                        sx={{
                          bgcolor: deepPurple[500],
                        }}
                      >
                        {"B"}
                      </Avatar>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.result == null ? " " : row.result.b_stat.rounds}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.b_stat.moves}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.b_stat.soldiers_total}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.b_stat.soldiers_killed}
                    </TableCell>
                    <TableCell align="right">
                      {row.result == null ? " " : row.result.b_stat.grids_taken}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Grid container spacing={2}>
                <Grid item xs={10.5}>
                  {" "}
                </Grid>

                <Grid item xs={1.5}>
                  {row.status == 'finished' ?
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={() => {
                        navigate("/battle?id=" + row.id);
                      }}
                    >
                      复盘
                    </Button> :
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      直播
                    </Button>
                  }
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function GameList() {
  const gamelists = useRecoilValue(GameListsState);
  const setGameList = useSetRecoilState(GameListsState);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
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
  const offset = useMemo(() => {
    return (currentPage - 1) * rowsPerPage;
  }, [rowsPerPage, currentPage]);

  useEffect(() => {
    (async () => {
      try {
        const [gamelist] = await Promise.all([
          get_game_list(rowsPerPage, offset),
        ]);
        setGameList(gamelist);
      } catch { }
    })();
  }, [offset, rowsPerPage]);

  const handleChangePageLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleChangePageRight = () => {
    if (gamelists?.length == rowsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };
  const handleChangePage = (event) => {
    setCurrentPage(parseInt(event.target.value));
    setRowsPerPage(rowsPerPage);
  };
  const [open, setOpen] = useState(false);
  return (
    <Grid container>
      <TableContainer component={Paper} sx={{ boxShadow: 10 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="justify">
                <h2><strong >Date</strong></h2>
              </TableCell>
              <TableCell>
                <h2><strong>Role</strong></h2>
              </TableCell>
              <TableCell>
                <h2><strong>Winner</strong></h2>
              </TableCell>
              <TableCell align="center">
                <h2><strong>Status</strong></h2>
              </TableCell>
              <TableCell align="center">
                <h2><strong>Official</strong></h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gamelists?.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1}> </TableCell>
              <TableCell colSpan={2}>
                <Typography variant="h5" component="h5">
                  Rows per page:
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    value={rowsPerPage}
                    sx={{ width: "5ch" }}
                    size="small"
                    onChange={handleChangeRowsPerPage}
                  />
                </Typography>
              </TableCell>
              <TableCell colSpan={2}>
                <Typography variant="h5" component="h5">
                  Page:
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    sx={{ width: "5ch" }}
                    size="small"
                    value={currentPage}
                    onChange={handleChangePage}
                  />
                </Typography>
              </TableCell>
              <TableCell colSpan={1} align="right">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={handleChangePageLeft}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={handleChangePageRight}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        aria-label={'Add'}
        color='primary'>
        <AddIcon onClick={() => { setOpen(true); }} />
      </Fab>
      <Dialog open={open} onClose={(e) => { setOpen(false) }}>
        <DialogTitle>生成自定义对局</DialogTitle>
        <DialogContent>
          <DialogContentText>
            请选择R&D的脚本
          </DialogContentText>
        </DialogContent>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={name1}
          label="R script name"
          onChange={(e) => { setName1(e.target.value) }}
        >{scripts.map((script) => (
          <MenuItem key={script.name} value={script.name}>
            {script.name}
          </MenuItem >
        ))}
        </Select>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={name2}
          label="B script name"
          onChange={(e) => { setName2(e.target.value) }}
        >{scripts.map((script) => (
          <MenuItem key={script.name} value={script.name}>
            {script.name}
          </MenuItem >
        ))}
        </Select>
        <DialogActions>
          <Button onClick={(e) => { setOpen(false) }}>关闭</Button>
          <Button onClick={handClick}>生成</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
