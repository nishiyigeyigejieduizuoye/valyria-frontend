import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { MessageState } from "../state/message";

const useMessage = () => {
  const [messageState, setMessageState] = useRecoilState(MessageState);
  const { messages } = messageState;
  /** 新增一条全局消息 */
  const addMessage = useCallback(
    (type, message) => {
      setMessageState((prevMessageState) => ({
        messages: [
          ...prevMessageState.messages,
          { type, message, isShow: true },
        ],
      }));
    },
    []
  );

  const hideMessage = useCallback((message) => {
    setMessageState((prevMessageState) => ({
      messages: prevMessageState.messages.map((item) => {
        if (item === message) {
          return { ...item, isShow: false };
        }
        return item;
      }),
    }));
  }, []);

  const clearAllMessages = useCallback(() => {
    setMessageState({ messages: [] });
  }, []);
  return [messages, { addMessage, hideMessage, clearAllMessages }];
};

export default useMessage;
