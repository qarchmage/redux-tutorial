import { Song, SongState } from "../../util/types";
import { SongListAct, SongListActs } from "./song.actions";

export const initialSongState: SongState = {
    songs: [],
};

const searchSongs: Song[] = [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "smashmouth - All Star", duration: "3:15" },
    { title: "backstreet boys - I Want it That Way", duration: "1:45" },
    { title: "lorde - Greenlight", duration: "1:45" },
    { title: "lorde - Royals", duration: "1:45" },
    { title: "metallica - Master of puppets", duration: "40:45" },
    { title: "metallica - one", duration: "40:45" },
    { title: "metallica - no remorse", duration: "40:45" },
    { title: "iron maiden - the trooper", duration: "40:45" },
    { title: "iron maiden - fear of the dark", duration: "40:45" },
    { title: "iron maiden - aces high", duration: "40:45" },
];
export const SongReducer = (
    state: SongState = initialSongState,
    action: SongListActs
): SongState => {
    switch (action.type) {
        case SongListAct.SEARCH_SONG:
            if (action.payload === "") {
                // reset state to the original memory database
                state.songs = searchSongs;
                return state;
            }
            // in memory database search
            const result = searchSongs.filter((song) =>
                song.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.songs = result;
            return state;
        case SongListAct.ADD_SONG:
            searchSongs.push({ title: action.payload, duration: "22:22" });
            state.songs = searchSongs;
            return state;
        default:
            return state;
    }
};

export default SongReducer;
