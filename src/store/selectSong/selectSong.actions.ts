import { Song } from "../../util/types";

export enum SelectedSongStateAction {
    SELECT_SONG = "SELECT_SONG",
}

export type SelectedSongStateActions = {
    payload: Song;
    type: SelectedSongStateAction.SELECT_SONG;
};
