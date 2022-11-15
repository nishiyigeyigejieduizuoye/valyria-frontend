import axios from "axios";

 
const instance = axios.create({
    timeout: 10000,
});
export async function get_gamedata_list(id=1){
    return (await instance.get("/api/games/"+id+"/live").data)
}