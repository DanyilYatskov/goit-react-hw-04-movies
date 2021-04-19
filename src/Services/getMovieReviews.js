import myKey from './movieDbKey';
import baseURL from './baseURL';

const getMovieReviews = movie_Id => {
  const url = `${baseURL}/movie/${movie_Id}/reviews?api_key=${myKey}&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getMovieReviews;
