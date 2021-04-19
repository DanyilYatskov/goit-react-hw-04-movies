const trimmMovieYear = response => {
  response.results.map(movie => {
    if (movie.release_date === '') {
      movie.release_date = 'Year';
    } else {
      movie.release_date = movie.release_date.substring(0, 4);
    }

    return movie;
  });
};

export default trimmMovieYear;
