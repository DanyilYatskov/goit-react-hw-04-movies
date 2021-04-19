import myKey from './movieDbKey';
import baseURL from './baseURL';

const getMovieCast = movie_Id => {
  const url = `${baseURL}/movie/${movie_Id}/credits?api_key=${myKey}&language=en-US`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getMovieCast;
