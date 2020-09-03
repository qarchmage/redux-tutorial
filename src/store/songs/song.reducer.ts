import { SongState } from "../../util/types";

export const initialSongState: SongState = {
    songs: [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30" },
        { title: "All Star", duration: "3:15" },
        { title: "I Want it That Way", duration: "1:45" },
    ],
};
// yeah this is stupid
export const SongReducer = (state: SongState = initialSongState): SongState => {
    return state;
};

export default SongReducer;
