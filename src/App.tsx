import Grid from "@material-ui/core/Grid";
import React from "react";
import SongDetail from "./cmp/song-detail/song-detail.cmp";
import SongSearch from "./cmp/song-search/song-search.cmp";
import SongList from "./cmp/songs-list/song-list.cmp";

const App = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <SongSearch />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SongList />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SongDetail />
            </Grid>
        </Grid>
    );
};

export default App;
