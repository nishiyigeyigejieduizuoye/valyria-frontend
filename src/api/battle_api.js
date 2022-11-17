import axios from "axios";

 
const instance = axios.create({
    timeout: 10000,
});
export async function get_gamedata_list(id){
    return (await instance.get("/api/games/"+id+"/live").data)
}
export async function get_games_details(id){
    return (await instance.get("/api/games/"+id+"/details").data)
}