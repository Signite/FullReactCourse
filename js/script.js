"use strict";

const numberOfFilms = +prompt('How many films you saw?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i<2; i++){
    let a = prompt('What is one of the last movies you watched?','');
    let b = prompt('How much do you rate it?','');
    
    personalMovieDB.movies[a] = b;
}

console.log('Survey done!');
