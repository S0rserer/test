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
let lastWatched = prompt("Какой ваш последний просмотренный фильм?"),
    rev = prompt("На сколько вы его оцените?"); 
    if(lastWatched != null && rev != null && lastWatched != '' && rev != '' && lastWatched.length < 50 && rev.length < 50){
        console.log('Done');
        personalMovieDB.movies[lastWatched] = rev;
    } else {
        console.log('Error!');
        i--;
    }
}
if (numberOfFilms < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30){
    console.log('Вы классический зритель');
} else if (numberOfFilms >= 30){
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);