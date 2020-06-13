"use strict";

var numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (var i = 0; i < numberOfFilms; i++){
const lastWatched = prompt("Какой ваш последний просмотренный фильм?"),
rev = prompt("На сколько вы его оцените?");
personalMovieDB.movies[lastWatched] = rev;
}

console.log(personalMovieDB.movies);

var test;

var abc;