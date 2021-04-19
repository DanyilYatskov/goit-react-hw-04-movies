import myKey from './movieDbKey';

const getMovieCast = movie_Id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_Id}/credits?api_key=${myKey}&language=en-US`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getMovieCast;
