"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

function showMyDB(){
    if (personalMovieDB.private == false){
        console.log(personalMovieDB)
    } else {
        console.log("Permission denied");
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр ${i}`);
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

writeYourGenres();

showMyDB();

for (let i = 0; i < numberOfFilms; i++){   
let lastWatched = prompt("Какой ваш последний просмотренный фильм?"),
    rev = prompt("На сколько вы его оцените?"); 
    if(lastWatched != null && rev != null && lastWatched != '' &&
     rev != '' && lastWatched.length < 50 && rev.length < 50){
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