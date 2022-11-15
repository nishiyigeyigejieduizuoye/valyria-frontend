import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "@/api/login_api";
import { listScripts } from "@/api/scripts_api";
import { LoadingUserInfoState, UserInfoState, ScriptsState } from "@/state/user";

const DefaultState = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const setScripts = useSetRecoilState(ScriptsState);
  const settLoadingUserInfo = useSetRecoilState(LoadingUserInfoState);
  useEffect(() => {
    (async () => {
      try {
        const [userInfo, scriptsList] = await Promise.all([
          getUserInfo(),
          listScripts(),
        ]);
        setUserInfo(userInfo);
        setScripts(scriptsList);
      } catch (e) {
      } finally {
        settLoadingUserInfo(false);
      }
    })();
  });
  return <></>;
};

export default DefaultState;
