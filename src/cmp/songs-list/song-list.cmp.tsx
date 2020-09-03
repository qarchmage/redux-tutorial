import React from "react";
import useSongListReducer from "./useSongListReducer";

const SongList = (): JSX.Element => {
    const { songs, setSong } = useSongListReducer();
    const renderList = () => {
        return songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => setSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    return <div className="ui divided list">{renderList()}</div>;
};

export default SongList;
