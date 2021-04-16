import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button';
import styles from './page404.module.scss';

class Page404 extends Component {
  
  handleGoHome = () => {
    const { history } = this.props;
    history.push({
      pathname: '/',
    });
  };

  render() {
    return (
      <div className={styles.notFoundPage}>
        <h2 className={styles.title}>Error 404 - page not found</h2>
        <Button
          name="Go to Home Page"
          type="button"
          handleOnClick={this.handleGoHome}
        />
      </div>
    );
  }
}

export default withRouter(Page404);
