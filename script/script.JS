"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < numberOfFilms; i++){
const lastWatched = prompt("Какой ваш последний просмотренный фильм?"),
rev = prompt("На сколько вы его оцените?");
personalMovieDB.movies[lastWatched] = rev;
}

console.log(personalMovieDB.movies);