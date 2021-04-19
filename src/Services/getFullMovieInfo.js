import myKey from './movieDbKey';

const getFullMovieInfo = movie_Id => {
  // возвращает полное инфо по фильму
  const url = `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${myKey}&language=en-US`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getFullMovieInfo;
