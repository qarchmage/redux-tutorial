import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Song } from "../../util/types";

interface SelectedSongReturn {
    selectedSong: Song;
}

const useSelectedSong: () => SelectedSongReturn = () => {
    // get the state from the appstate
    const { selectedSong } = useSelector((appState: AppState) => {
        return {
            selectedSong: appState.selectedSong,
        };
    });

    return { selectedSong: selectedSong.song };
};

export default useSelectedSong;
