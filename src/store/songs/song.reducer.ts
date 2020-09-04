import { Song, SongState } from "../../util/types";
import { SongListAct, SongListActs } from "./song.actions";

export const initialSongState: SongState = {
    songs: [
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
    ],
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
// yeah this is stupid
export const SongReducer = (
    state: SongState = initialSongState,
    action: SongListActs
): SongState => {
    switch (action.type) {
        case SongListAct.SEARCH_SONG:
            if (action.payload === "") {
                state.songs = searchSongs;
                return state;
            }
            const result = searchSongs.filter((song) =>
                song.title.includes(action.payload)
            );
            state.songs = result;
            return state;
        default:
            return initialSongState;
    }
};

export default SongReducer;
