import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { SongListAct, SongListActs } from "../../store/songs/song.actions";

interface songListReducerReturn {
    setSongList: (payload: string) => void;
}
const useSongSearch: () => songListReducerReturn = () => {
    // register the dispatch actions
    const dispatch = useDispatch<Dispatch<SongListActs>>();

    // define the callback functions
    const setSongList = useCallback(
        (payload: string) => {
            return dispatch({
                type: SongListAct.SEARCH_SONG,
                payload,
            });
        },
        [dispatch]
    );

    return { setSongList };
};

export default useSongSearch;
