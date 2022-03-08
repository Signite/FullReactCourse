"use strict";

//const numberOfFilms = +prompt('How many films you saw?','');

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    DoSomething: () =>{
        personalMovieDB.count = 99;
    }
};

personalMovieDB.DoSomething();
console.log(personalMovieDB.count);

// for (let i = 0; i<2; i++){
//     let a = prompt('What is one of the last movies you watched?','');
//     let b = prompt('How much do you rate it?','');
    
//     personalMovieDB.movies[a] = b;
// }

console.log('Survey done!');
