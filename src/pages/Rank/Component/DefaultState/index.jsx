import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { get_rank_list } from "@/api/rank_api"
import { RankListsState } from "@/state/ranklists";

const DefaultState = () => {
  const setRankList = useSetRecoilState(RankListsState);
  useEffect(() => {
    (async () => {
      try {
        const [ranklist] = await Promise.all([
          get_rank_list(),
        ]);
        setRankList(ranklist);
      } catch (e) {
      } finally {
      }
    })();
  });
  return <></>;
};

export default DefaultState;
