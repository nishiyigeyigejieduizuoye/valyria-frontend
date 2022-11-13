import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});
export async function get_game_list(limit, offset) {
  return await instance.get("/api/games/", {
    limit,
    offset,
  }).data;
}
