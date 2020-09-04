export enum SongListAct {
    SEARCH_SONG = "SEARCH_SONG",
}

export type SongListActs = {
    payload: string;
    type: SongListAct.SEARCH_SONG;
};
