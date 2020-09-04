import { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../../util/types";
import { AppState } from "./../../store/index";
import {
    SelectSongAct,
    SelectSongActs,
} from "./../../store/selectSong/selectSong.actions";

interface songListReducerReturn {
    songs: Song[];
    setSong: (payload: Song) => void;
}
const useSongListReducer: () => songListReducerReturn = () => {
    // register the dispatch actions
    const dispatch = useDispatch<Dispatch<SelectSongActs>>();
    // get the state from the appstate
    const { songs } = useSelector((appState: AppState) => {
        return {
            songs: appState.songs,
        };
    });

    // define the callback functions
    const setSong = useCallback(
        (payload: Song) => {
            return dispatch({
                type: SelectSongAct.SELECT_SONG,
                payload,
            });
        },
        [dispatch]
    );

    return { songs: songs.songs, setSong: setSong };
};

export default useSongListReducer;
