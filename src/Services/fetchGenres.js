import myKey from './movieDbKey';

const fetchGenres = () => {
  //Функция забирает с сервера массив с именами и ид жанров
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${myKey}&language=en_US`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(response => response.genres)
    .catch(e => console.log(e));
};
export default fetchGenres;
