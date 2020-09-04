export enum SongListAct {
    SEARCH_SONG = "SEARCH_SONG",
    ADD_SONG = "ADD_SONG",
}

export type SongListActs =
    | { payload: string; type: SongListAct.SEARCH_SONG }
    | { payload: string; type: SongListAct.ADD_SONG };
