import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import useSongSearch from "./useSongListReducer";

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
    const { setSongList } = useSongSearch();
    // this is
    useEffect(() => {
        // set debounced term after 1 sec
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        // clear the old timer here
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        // call the action here
        console.log("debounced: ", debouncedTerm);
        setSongList(debouncedTerm);
    }, [setSongList, debouncedTerm]);

    return (
        <TextField
            className={classes.root}
            value={term}
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
