import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});
export async function post_user_avatar(avatar) {
  return await instance.post("/api/user/avatar",{
    headers:{'Content-Type':'multipart/form-data'},
    avatar:avatar,
  }
  );
}