import React from "react";
import SongDetail from "./cmp/songs-detail/song-detail.cmp";
import SongList from "./cmp/songs-list/song-list.cmp";

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
