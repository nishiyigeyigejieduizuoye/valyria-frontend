import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});

export async function listScripts() {
  return (await instance.get("/api/script")).data;
}

export async function createScript(name, content) {
  return await instance.post("/api/script/", { name, content });
}
