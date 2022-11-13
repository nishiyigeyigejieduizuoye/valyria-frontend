import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});
export async function get_rank_list() {
  return ( await instance.get("/api/tops")).data;
}
