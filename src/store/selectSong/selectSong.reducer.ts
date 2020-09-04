import { Song } from "../../util/types";
import { SelectSongAct, SelectSongActs } from "./selectSong.actions";

export interface selectedSongState {
    song: Song;
}
export const initialSongState: selectedSongState = {
    song: { title: "", duration: "" },
};

const selectedSongReducer = (
    state: selectedSongState = initialSongState,
    action: SelectSongActs
): selectedSongState => {
    switch (action.type) {
        case SelectSongAct.SELECT_SONG:
            return {
                song: action.payload,
            };
        default:
            return state;
    }
};

export default selectedSongReducer;
