import axios from "axios";

const instance = axios.create({
  timeout: 10000,
});

export async function listScripts() {
  return (await instance.get("/api/script")).data.data;
}

export async function createScript(name, code) {
  return await instance.post("/api/script", { name: name, code: code });
}
