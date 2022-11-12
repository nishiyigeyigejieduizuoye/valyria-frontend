import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});

export async function login(email, password) {
  return await instance.post("/api/user/login", {
    email,
    password,
  });
}

export async function register(name, email, password) {
  return await instance.post("/api/user", {
    name,
    email,
    password,
  });
}

export async function logout() {
  return await instance.post("/api/user/logout");
}

export async function getUserInfo() {
  return (await instance.get("/api/user/info")).data;
}
