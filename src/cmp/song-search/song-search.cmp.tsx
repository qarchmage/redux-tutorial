import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import useSongListReducer from "../songs-list/useSongListReducer";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
        },
    })
);

export const SongSearch = () => {
    const classes = useStyles();
    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState("");
    const { setSongList, addSong } = useSongListReducer();

    // after a timeout make the action call
    useEffect(() => {
        // set debounced term after 1 sec
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        // clear the old timer here
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        // call the action here
        setSongList(debouncedTerm);
    }, [setSongList, debouncedTerm]);

    return (
        <TextField
            className={classes.root}
            value={term}
            autoFocus
            onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                    if (term === "") {
                        return;
                    }
                    addSong(term);
                    setTerm("");
                }
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTerm(e.currentTarget.value)
            }
            id="outlined-basic"
            label="Search"
            variant="outlined"
        />
    );
};

export default SongSearch;
