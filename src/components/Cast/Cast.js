import React, { Component } from 'react';
import fetchAPI from '../../Services/fetchAPI';
import handleNoImage from '../../Services/handleNoImage';
import BigTitle from '../BigTitle';
import Loader from '../Loader';
import styles from './cast.module.scss';

class Cast extends Component {
  state = {
    cast: [],
    loader: false,
    error: false,
  };

  async componentDidMount() {
    this.setState({ loader: true, error: false });
    const { movieID } = this.props.match.params;
    const cast = await fetchAPI
      .getMovieCast(movieID)
      .then(({ cast }) => {
        if (cast.length === 0) {
          this.setState({ error: true });
        }
        return cast;
      })
      .catch(e => this.setState({ error: true }))
      .finally(() => this.setState({ loader: false }));
    if (cast) {
      this.setState({ cast: cast });
    }
  }

  render() {
    const { cast, loader, error } = this.state;
    //console.log('render cast props', this.props);
    return (
      <>
        {error && <BigTitle title=" There is no information about cast" />}
        {loader && <Loader />}
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <h4>{actor.name}</h4>
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  onError={handleNoImage}
                  alt={actor.name}
                  className={styles.photo}
                />
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
