import myKey from './movieDbKey';
import getMoviesWithGenreNames from './getMoviesWithGenreNames';
import trimmMovieYear from './trimmMovieYear';

const validTimeWindow = 'day'; //day,week  /  выбор между тренды за неделю или за день
const validMediaType = 'movie'; //all,movie,tv,person / тренды выбор всё,толькоо фильмы,только сериалы, по популярным актёрам

const getTrendingMovies = (page = 1) => {
  const url = `https://api.themoviedb.org/3/trending/${validMediaType}/${validTimeWindow}?api_key=${myKey}&language=en-US&page=${page}`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(response => {
      trimmMovieYear(response);
      return getMoviesWithGenreNames(response);
    })
    .catch(e => console.log(e));
};

export default getTrendingMovies;
