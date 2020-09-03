import { Box } from "@material-ui/core";
import React from "react";
import useSelectedSong from "./useSelectedSong";

const SongDetail = () => {
    const { selectedSong } = useSelectedSong();
    return (
        <Box>
            <h3>Details for:</h3>
            <p>
                Title: {selectedSong.title}
                <br />
                Duration: {selectedSong.duration}
            </p>
        </Box>
    );
};

export default SongDetail;
