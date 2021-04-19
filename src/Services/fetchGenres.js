import myKey from './movieDbKey';
import baseURL from './baseURL';

const fetchGenres = () => {
  //Функция забирает с сервера массив с именами и ид жанров
  const url = `${baseURL}/genre/movie/list?api_key=${myKey}&language=en_US`;
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
