import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { get_game_list } from "@/api/game_api"
import { GameListsState } from "@/state/gamelists";

const DefaultState = () => {
  const set_game_list = useSetRecoilState(GameListsState);
  useEffect(() => {
    (async () => {
      try {
        const [gamelist] = await Promise.all([
          get_game_list(),
        ]);
        set_game_list(gamelist);
      } catch (e) {
      } finally {
      }
    })();
  });
  return <></>;
};

export default DefaultState;
