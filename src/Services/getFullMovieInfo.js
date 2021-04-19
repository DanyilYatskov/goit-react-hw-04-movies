import myKey from './movieDbKey';
import baseURL from './baseURL';

const getFullMovieInfo = movie_Id => {
  // возвращает полное инфо по фильму
  const url = `${baseURL}/movie/${movie_Id}?api_key=${myKey}&language=en-US`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getFullMovieInfo;
