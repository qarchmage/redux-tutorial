import { Song } from "../../util/types";

export enum SelectSongAct {
    SELECT_SONG = "SELECT_SONG",
}

export type SelectSongActs = {
    payload: Song;
    type: SelectSongAct.SELECT_SONG;
};
