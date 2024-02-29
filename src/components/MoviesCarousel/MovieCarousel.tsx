import {Button, Typography} from "@mui/material";
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {posterURL, urls} from "../../configs";
import DummyBackground from "../../dummy_photos/dummy_background.jpg"
import {IMovie} from "../../interfaces";
import css from "./MovieCarousel.module.css";
import {RatingStar} from "../RatingStar";

interface IProps {
    movie: IMovie;
}

const MovieCarousel:FC<IProps> = ({movie}) => {
    const {id, title, backdrop_path, vote_average} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.MovieCarousel} style={{backgroundImage: backdrop_path ? `url(${posterURL}${urls.originalPosterSize}${backdrop_path})` : DummyBackground}}>
            <div className={css.info}>
                <div>
                    <Typography sx={{color: "white"}} variant={"h5"}>
                        {title.toUpperCase()}
                    </Typography>
                    <RatingStar rating={vote_average}/>
                </div>
                <div>
                    <Button sx={{color: "white", borderColor: "white"}} variant={"outlined"} onClick={() => {
                        navigate(`/movies/${id}`);
                    }}>
                        View Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export {MovieCarousel};