import { Song } from "../../util/types";
import {
    SelectedSongStateAction,
    SelectedSongStateActions,
} from "./selectSong.actions";

export interface selectedSongState {
    song: Song;
}
export const initialSongState: selectedSongState = {
    song: { title: "", duration: "" },
};

const selectedSongReducer = (
    state: selectedSongState = initialSongState,
    action: SelectedSongStateActions
): selectedSongState => {
    console.log("prevState: ", state);
    console.log("action: ", action);

    switch (action.type) {
        case SelectedSongStateAction.SELECT_SONG:
            return {
                song: action.payload,
            };
        default:
            return state;
    }
};

export default selectedSongReducer;
