import {Badge, Button, Typography} from "@mui/material";
import React, {FC, useEffect} from 'react';

import {Genre} from "../Genre";
import css from "./Genres.module.css"
import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers";
import {genreService} from "../../services";
import {useGenreQuery} from "../../hooks";

const Genres: FC = () => {
    const {state: {isDarkTheme, selectedGenres, genres}, dispatch} = useAppContext();
    useEffect(() => {
        genreService.getAll().then(value => value.data).then(value => dispatch(movieActions.setGenres(value.genres)));
    }, [dispatch]);
    const {searchBySelectedGenres} = useGenreQuery();
    return (
        <div className={css.Genres} style={{color: isDarkTheme ? "white" : "#1976d2"}}>
            <Badge badgeContent={selectedGenres.length} color={"primary"}>{<Typography>Genres:</Typography>}</Badge>
            <div className={css.GenresDiv}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            {!!selectedGenres.length && <Button
                sx={{width: "100%", color: isDarkTheme ? "white" : "#1976d2"}}
                variant={"outlined"}
                onClick={searchBySelectedGenres}>Search</Button>}
        </div>
    );
};

export {Genres};