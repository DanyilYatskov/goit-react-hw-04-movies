import myKey from './movieDbKey';

const getMovieReviews = movie_Id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_Id}/reviews?api_key=${myKey}&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(e => console.log(e));
};

export default getMovieReviews;
