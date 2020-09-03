import React from "react";
import useSelectedSong from "./useSelectedSong";

const SongDetail = () => {
    const { selectedSong } = useSelectedSong();
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {selectedSong.title}
                <br />
                Duration: {selectedSong.duration}
            </p>
        </div>
    );
};

export default SongDetail;
