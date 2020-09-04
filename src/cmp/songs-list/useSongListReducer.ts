import { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../../util/types";
import { AppState } from "./../../store/index";
import {
    SelectSongAct,
    SelectSongActs,
} from "./../../store/selectSong/selectSong.actions";
import { SongListAct, SongListActs } from "./../../store/songs/song.actions";

interface songListReducerReturn {
    songs: Song[];
    setSong: (payload: Song) => void;
    setSongList: (payload: string) => void;
    addSong: (payload: string) => void;
}
const useSongListReducer: () => songListReducerReturn = () => {
    // register the dispatch actions
    const dispatch = useDispatch<Dispatch<SelectSongActs | SongListActs>>();
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

    const setSongList = useCallback(
        (payload: string) => {
            return dispatch({
                type: SongListAct.SEARCH_SONG,
                payload,
            });
        },
        [dispatch]
    );

    const addSong = useCallback(
        (payload: string) => {
            return dispatch({
                type: SongListAct.ADD_SONG,
                payload,
            });
        },
        [dispatch]
    );

    return {
        songs: songs.songs,
        addSong: addSong,
        setSong: setSong,
        setSongList: setSongList,
    };
};

export default useSongListReducer;
