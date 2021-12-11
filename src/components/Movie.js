import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green';
    } else if (vote >= 6){
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = ({title,poster_path,overview,vote_average}) => (
    <div className='movie'>
        <img src={poster_path ? (IMG_API + poster_path) : 'https://ww.namu.la/s/6506a3d133dedf13121171a92fca24a38e0bc13f1a205582fbe2e299fabc64ea6efbb6f45b2a6ad7d1c3a5df61afc295dcb3fd9cffa91c20bd479c6cfd09ce0686a8e7a8608c88959f195c188d42b778'} alt={title} />
        <div className='movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className='movie-over'>
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;
