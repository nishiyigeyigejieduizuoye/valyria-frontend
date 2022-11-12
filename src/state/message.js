import { atom } from "recoil";

export const MessageState = atom({
  key: "MessageState",
  default: {
    messages: [],
  },
});
