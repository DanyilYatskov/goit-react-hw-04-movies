import myKey from './movieDbKey';

const fetchAPI = {
  moviesSearchActive: false, // ищем фильмы или рендер трендовых
  searchTag: '',
  page: 1,
  itemsPerPage: 9,
  adult: 'false', //false,true / отображать взрослый контент или нет
  language: 'en-US', //ru-RU,ua-UA,en-US.....
  validTimeWindow: 'day', //day,week  /  выбор между тренды за неделю или за день
  validMediaType: 'movie', //all,movie,tv,person / тренды выбор всё,толькоо фильмы,только сериалы, по популярным актёрам
  genresArray: [], // массив ид и имен жанров

  fetchGenres() {
    //Функция забирает с сервера массив с именами и ид жанров
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${myKey}&language=${this.language}`;
    const fetchedGenresArray = fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => response.genres)
      .catch(this.errorHandler);
    fetchedGenresArray.then(res => {
      this.genresArray = res.slice();
    });
  },
  getMoviesWithGenreNames(response) {
    //Функция заменяет для фильма ид жанров на их имена
    response.results.map(movie => {
      if (movie.genre_ids.length === 0) {
        movie.genre_ids.push('Genre');
      } else {
        const genresNamesArr = movie.genre_ids.map(movieGenre => {
          const updatedGenre = this.genresArray.find(
            genre => genre.id === movieGenre,
          );
          return ' ' + updatedGenre.name;
        });
        movie.genre_ids = genresNamesArr.slice();
      }
      return movie;
    });
  },
  trimmMovieYear(response) {
    response.results.map(movie => {
      if (movie.release_date === '') {
        movie.release_date = 'Year';
      } else {
        movie.release_date = movie.release_date.substring(0, 4);
      }

      return movie;
    });
  },
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
  searchMoviesbyTag(page = 1) {
    //Поиск фильма по тому что ввели в инпут
    this.moviesSearchActive = true;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=${this.language}&query=${this.searchTag}&page=${page}&per_page=${this.itemsPerPage}&include_adult=${this.adult}`;
    this.fetchGenres();
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
        this.getMoviesWithGenreNames(response);
        this.trimmMovieYear(response);
        //this.page += 1;
        return response;
      })
      .catch(e => console.log(e));
  },
  getTrendingMovies(page = 1) {
    //Забирает с сервера трендовые фильмы , по умолчанию за день
    this.moviesSearchActive = false;
    // refs.movieInputRef.value = '';
    const url = `https://api.themoviedb.org/3/trending/${this.validMediaType}/${this.validTimeWindow}?api_key=${myKey}&language=${this.language}&page=${page}&per_page=${this.itemsPerPage}`;
    this.fetchGenres();
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        this.getMoviesWithGenreNames(response);
        this.trimmMovieYear(response);
        this.page += 1;
        return response;
      })
      .catch(e => console.log(e));
  },
  getFullMovieInfo(movie_Id) {
    // возвращает полное инфо по фильму
    const url = `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${myKey}&language=en-US`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        return response;
      })
      .catch(e => console.log(e));
  },
};

export default fetchAPI;
