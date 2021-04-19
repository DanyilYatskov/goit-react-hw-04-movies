import fethGenres from './fetchGenres';

async function getMoviesWithGenreNames(response) {
  //Функция заменяет для фильма ид жанров на их имена
  const genresArray = await fethGenres();
  response.results.map(movie => {
    if (movie.genre_ids.length === 0) {
      movie.genre_ids.push('Genre');
    } else {
      const genresNamesArr = movie.genre_ids.map(movieGenre => {
        const updatedGenre = genresArray.find(genre => genre.id === movieGenre);
        return ' ' + updatedGenre.name;
      });
      movie.genre_ids = genresNamesArr.slice();
    }
    return movie;
  });
  return response;
}

export default getMoviesWithGenreNames;
