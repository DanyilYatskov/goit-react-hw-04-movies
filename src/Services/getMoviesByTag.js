import myKey from './movieDbKey';
import getMoviesWithGenreNames from './getMoviesWithGenreNames';
import trimmMovieYear from './trimmMovieYear';

const getMoviesByTag = {
  searchTag: '',
  page: 1,
  adult: 'false', //false,true / отображать взрослый контент или нет
  language: 'en-US', //ru-RU,ua-UA,en-US.....

  resetPageToFirst() {
    //сброс на 1ю страницу
    this.page = 1;
  },

  get movieName() {
    return this.searchTag;
  },

  set movieName(value) {
    this.searchTag = value;
  },

  searchMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${this.searchTag}&page=${this.page}&include_adult=${this.adult}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        if (response.results.length === 0) {
          return;
        }
        trimmMovieYear(response);
        return getMoviesWithGenreNames(response);
      })
      .catch(e => console.log(e));
  },
};

export default getMoviesByTag;
