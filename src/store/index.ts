import { combineReducers, createStore } from "redux";
import SelectedSongReducer from "./selectSong/selectSong.reducer";
import SongReducer from "./songs/song.reducer";

// we could make a interface here but do not need tobecause we can infer to it
const rootReducer = combineReducers({
    songs: SongReducer,
    selectedSong: SelectedSongReducer,
});

const store = createStore(rootReducer);

export default store;
export type AppState = ReturnType<typeof rootReducer>;
