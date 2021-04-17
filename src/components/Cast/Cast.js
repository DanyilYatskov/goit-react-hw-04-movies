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
  };

  async componentDidMount() {
    this.setState({ loader: true });
    const { movieID } = this.props.match.params;
    const cast = await fetchAPI
      .getMovieCast(movieID)
      .finally(() => this.setState({ loader: false }));
    if (cast) {
      this.setState({ cast: cast.cast });
    }
  }

  render() {
    const { cast, loader } = this.state;
    const src = `https://image.tmdb.org/t/p/original${cast.profile_path}`;
    console.log(cast);
    return (
      <>
        {cast.length === 0 && (
          <BigTitle title=" There is no information about cast" />
        )}
        {loader && <Loader />}
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <h4>{actor.name}</h4>
                <img src={src} onError={handleNoImage} alt={actor.name} />
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
