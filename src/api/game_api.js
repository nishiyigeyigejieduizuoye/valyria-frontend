import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});
export async function get_game_list(limit, offset) {
  let res =  await instance.get("/api/games/", {
     params:{
        limit,
        offset,
    }
  });
  return res.data.data;
}
