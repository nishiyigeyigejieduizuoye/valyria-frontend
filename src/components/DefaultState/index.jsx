import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "@/api/login_api";
import { LoadingUserInfoState, UserInfoState } from "@/state/user";

const DefaultState = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const settLoadingUserInfo = useSetRecoilState(LoadingUserInfoState);
  useEffect(() => {
    (async () => {
      try {
        const [userInfo] = await Promise.all([
          getUserInfo(),
        ]);
        setUserInfo(userInfo);
      } catch (e) {
      } finally {
        settLoadingUserInfo(false);
      }
    })();
  });
  return <></>;
};

export default DefaultState;
