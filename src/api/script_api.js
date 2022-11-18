import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});
export async function generate_game(r_script,b_script) {
  return  await instance.post("/api/games/custom", {
    "r_script": r_script,
    "b_script": b_script
});
}
