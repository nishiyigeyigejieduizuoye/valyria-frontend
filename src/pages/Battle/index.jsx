import { Stage, Layer, Rect, Text, Image, Group } from "react-konva";
import React, { Component, useState } from "react";
import useImage from "use-image";
import { useEffect } from "react";
import { get_games_details } from "../../api/battle_api";
import { useSearchParams } from "react-router-dom";
import { Input } from "@mui/material";
import { Toolbar, } from "@mui/material";
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Rightbar from './Component/Rightbar'
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import { Button, ButtonGroup } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '@/logo/logo.svg';
let map;
let ticks;
const Gx = window.innerWidth / 10;
const Gy = window.innerHeight / 10;

function draw(i, j, size, type, soldiers) {
  switch (type) {
    case "M":
      return <ShanImage x={i} y={j} size={size} />;
    case "C":
      return <ChenbaoImage x={i} y={j} size={size} num={soldiers} />;
    case "R":
      return <WangguanImage_red x={i} y={j} size={size} num={soldiers} />;
    case "B":
      return <WangguanImage_blue x={i} y={j} size={size} num={soldiers} />;
    case "CR":
      return <ChenbaoImage_red x={i} y={j} size={size} num={soldiers} />;
    case "CB":
      return <ChenbaoImage_blue x={i} y={j} size={size} num={soldiers} />;
    case "LR":
      return <Plaid_red x={i} y={j} size={size} num={soldiers} />;
    case "LB":
      return <Plaid_blue x={i} y={j} size={size} num={soldiers} />;
  }
}

const Judge = (props) => {
  const tick = props.tick;

  useEffect(() => {
    if (tick >= ticks.length) return;
    if (ticks[tick].changes === undefined || ticks[tick].changes === null) {
      return;
    }
    for (const change of ticks[tick].changes) {
      //更新地图指定格的状态
      map.grids[change.x * map.width + change.y].type = change.grid.type;
      map.grids[change.x * map.width + change.y].soldiers =
        change.grid.soldiers;
    }
  }, [props.tick]);

  return <></>;
};

const ShanImage = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const [image] = useImage("http://www.yvmu.top/img/neutrality/mountain.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
    </>
  );
};

const WangguanImage_red = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage("http://www.yvmu.top/img/red/Crown.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const WangguanImage_blue = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage("http://www.yvmu.top/img/blue/crown.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const ChenbaoImage_red = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage("http://www.yvmu.top/img/red/castle.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const ChenbaoImage_blue = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage("http://www.yvmu.top/img/blue/castle.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const ChenbaoImage = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage("http://www.yvmu.top/img/neutrality/Castle.png");
  return (
    <>
      <Image
        image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const Plaid_red = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  return (
    <>
      <Rect
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
        fill="red"
        stroke="black"
        strokeWidth={0.5}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

const Plaid_blue = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  return (
    <>
      <Rect
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
        fill="blue"
        stroke="black"
        strokeWidth={0.5}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily="serif"
        fill="white"
      />
    </>
  );
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 75,
      width: map.width * 75,
      height: map.height * 75,
      str: [],
    };
  }

  renderdraw() {
    for (let i = 0; i < map.width; i++) {
      for (let j = 0; j < map.height; j++) {
        this.state.str.push(
          draw(
            i,
            j,
            this.state.size,
            map.grids[i * map.width + j].type,
            map.grids[i * map.width + j].soldiers
          )
        );
      }
    }
    return this.state.str;
  }

  render() {
    return (
      <>
        <Rect
          x={Gx}
          y={Gy}
          width={this.state.width}
          height={this.state.height}
          fill="grey"
          stroke="grey"
          strokeWidth={2}
          shadowBlur={10}
        />
        <Group>{this.renderdraw()}</Group>
      </>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Judge tick={this.props.tick} />
      </>
    );
  }
}

const App = (props) => {
  const { r_user_id, b_user_id } = props;
  const [tick, setTick] = useState(0);
  const [auto, setAuto] = useState(false);
  const [speed, setSpeed] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setTick(newValue);
  };

  const handleInputChange = (event) => {
    setTick(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleBlur = () => {
    if (tick < 1) {
      setTick(1);
    } else if (tick > ticks.length) {
      setSpeed(ticks.length);
    }
  };

  useEffect(() => {
    if (tick + 1 >= ticks.length) {
      setAuto(false);
    }
  }, [tick, setAuto]);

  useEffect(() => {
    if (auto && tick + 1 < ticks.length) {
      setTimeout(() => {
        setTick(tick + 1);
      }, 100 / speed);
    }
  }, [tick, setTick, auto]);
  const Input = styled(MuiInput)`width: 42px;`;
  return (
    <>
      {/* <Toolbar></Toolbar> */}
      <Toolbar />
      <Grid container >
        <Rightbar id={r_user_id}></Rightbar>

        <Grid container item md={7} rowSpacing={2}>
          <Toolbar></Toolbar>
          <Grid item md={12}>
            <Paper
              sx={{
                position: 'relative',

                mb: 4,
                backgroundSize: 'cover',
                opacity: 0.8,
                backgroundPosition: 'center',
                backgroundImage: `url(${logo})`,


              }}
            >

              <Grid container rowSpacing={7}  >
                <Grid>
                  <Stage width={550} height={450}>
                    <Layer>
                      <Board />
                      <Game tick={tick} />
                    </Layer>
                  </Stage>
                </Grid>
                <Grid item md={12}></Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={12} component={Paper} elevation={2} >
            <Grid container spacing={2}  >
              <Grid item>
                <LabelOutlinedIcon color="primary" />
              </Grid>
              <Grid item md>
                <Slider
                  value={typeof tick === 'number' ? tick : 0}
                  step={1}
                  min={1}
                  max={ticks.length}
                  onChange={handleSliderChange}
                // aria-label="Small"
                />
              </Grid>
              <Grid item>
                <Input
                  value={tick}
                  size="small"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 1000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </Grid>

            </Grid>
            <Grid container justifyContent="center" >
              <Grid item>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => { setSpeed(1), console.log(speed) }}>X1</Button>
                  <Button onClick={() => setSpeed(5)}>X5</Button>
                  <Button onClick={() => { setSpeed(10), console.log(speed) }}>X10</Button>
                  <Button variant="contained" onClick={() => { setAuto(!auto); }}
                  >{auto ? "停止播放" : "开启播放"}</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Rightbar id={b_user_id}></Rightbar>

      </Grid>
    </>
  );
};

const Battle = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const contestId = searchParams.get("id");
  const r_user_id = searchParams.get("r_user_id");
  const b_user_id = searchParams.get("b_user_id");
  useEffect(() => {
    (async () => {
      let data = await get_games_details(contestId);
      map = data.data.map;
      ticks = data.data.ticks;
      setLoading(false);

    })();
  }, [contestId, get_games_details, setLoading]);

  return <>{loading ? <p>加载中</p> : <App r_user_id={r_user_id} b_user_id={b_user_id} />}</>;
};

export default Battle;
