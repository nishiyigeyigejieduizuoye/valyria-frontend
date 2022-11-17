import { Stage, Layer, Rect, Shape, Text, Image, Group } from 'react-konva';
import React, { Component } from "react";
import useImage from 'use-image';
import Data from './details.json'

const map = Data.data.map;
const size = map.size;
const ticks = Data.data.ticks;
const ticks_length = ticks.length;
const Gx = window.innerWidth / 10;
const Gy = window.innerHeight / 10;
let timer = null
function draw(i, j, size, type, soldiers) {
  switch (type) {
    case "M":
      return (<ShanImage x={i} y={j} size={size} />)
      break;
    case "C":
      return (<ChenbaoImage x={i} y={j} size={size} num={soldiers} />)
      break;
    case "R":
      return (<WangguanImage_red x={i} y={j} size={size} num={soldiers} />)
      break;
    case "B":
      return (<WangguanImage_blue x={i} y={j} size={size} num={soldiers} />)
      break;
    case "CR":
      return (<ChenbaoImage_red x={i} y={j} size={size} num={soldiers} />)
      break;
    case "CB":
      return (<ChenbaoImage_blue x={i} y={j} size={size} num={soldiers} />)
      break;
    case "LR":
      return (<Plaid_red x={i} y={j} size={size} num={soldiers} />)
      break;
    case "LB":
      return (<Plaid_blue x={i} y={j} size={size} num={soldiers} />)
  }
}

const Judge = (param) => {
  const tick = param.tick;
  const str = [];
  console.log(tick);
  if (tick % 2 == 0) { return; }
  for (var i = 0; i < ticks[tick].changes.length; i++) {
    //更新地图指定格的状态
    console.log(ticks[tick].changes.length)
    map.grids[ticks[tick].changes[i].x * map.width + ticks[tick].changes[i].y].type = ticks[tick].changes[i].grid.type;
    map.grids[ticks[tick].changes[i].x * map.width + ticks[tick].changes[i].y].soldiers = ticks[tick].changes[i].grid.soldiers;
    str.push(draw(ticks[tick].changes[i].x, ticks[tick].changes[i].y, 50, ticks[tick].changes[i].grid.type, ticks[tick].changes[i].grid.soldiers))
  }
  return;
}

const ShanImage = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const [image] = useImage('http://www.yvmu.top/img/neutrality/mountain.png');
  return (
    <>
      <Image image={image}
        x={Gx + xx * size}
        y={Gy + yy * size}
        width={size}
        height={size}
      />
    </>)
};
const WangguanImage_red = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage('http://www.yvmu.top/img/red/Crown.png');
  return (
    <>
      <Image image={image}
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
        fontFamily='serif'
        fill='white'
      />
    </>)

};

const WangguanImage_blue = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage('http://www.yvmu.top/img/blue/crown.png');
  return (
    <>
      <Image image={image}
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
        fontFamily='serif'
        fill='white'
      />
    </>)

};

const ChenbaoImage_red = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage('http://www.yvmu.top/img/red/castle.png');
  return (
    <>
      <Image image={image}
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
        fontFamily='serif'
        fill='white'
      />
    </>
  )
};
const ChenbaoImage_blue = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage('http://www.yvmu.top/img/blue/castle.png');
  return (
    <>
      <Image image={image}
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
        fontFamily='serif'
        fill='white'
      />
    </>
  )
};

const ChenbaoImage = (param) => {
  const xx = param.x;
  const yy = param.y;
  const size = param.size;
  const num = param.num;
  const [image] = useImage('http://www.yvmu.top/img/neutrality/Castle.png');
  return (
    <>
      <Image image={image}
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
        fontFamily='serif'
        fill='white'
      />
    </>
  )
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
        fill='red'
        stroke='black'
        strokeWidth={0.5}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily='serif'
        fill='white'
      />
    </>
  )
}
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
        fill='blue'
        stroke='black'
        strokeWidth={0.5}
      />
      <Text
        x={Gx + xx * size + size / 4}
        y={Gy + yy * size + size / 4}
        text={num}
        fontSize={size / 2}
        fontFamily='serif'
        fill='white'
      />
    </>
  )
}


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 50,
      width: map.width * 50,
      height: map.height * 50,
      str: []
    }
  }
  renderdraw() {
    for (let i = 0; i < map.width; i++) {
      for (let j = 0; j < map.height; j++) {
        this.state.str.push(draw(i, j, this.state.size, map.grids[i * map.width + j].type, map.grids[i * map.width + j].soldiers));
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
    )

  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 1
    }
  }
  render() {
    return (
      <>
        <Judge tick={this.props.tick} />
      </>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 1,
    }
  }
  render() {
    return (
      <>
        <div>
          <button onClick={() => this.setState({ tick: this.state.tick + 2 })}>第 {(this.state.tick - 1) / 2}步</button>
        </div>
        <Stage width={1238} height={window.innerHeight}>
          <Layer>
            <Board />
            <Game tick={this.state.tick} />
          </Layer>
        </Stage>

      </>
    );
  }
}

const Battle = () => {
  return (
    <>
      <App />
    </>
  );
}


export default Battle;
