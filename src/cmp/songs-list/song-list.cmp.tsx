import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import React from "react";
import useSongListReducer from "./useSongListReducer";

const SongList = (): JSX.Element => {
    const { songs, setSong } = useSongListReducer();
    return (
        <>
            <List component="nav" aria-label="main mailbox folders">
                {songs.map((song) => {
                    return (
                        <ListItem
                            button
                            key={song.title}
                            onClick={() => setSong(song)}
                        >
                            <ListItemIcon>
                                <MusicNoteIcon />
                            </ListItemIcon>
                            <ListItemText primary={song.title} />
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
};

export default SongList;
