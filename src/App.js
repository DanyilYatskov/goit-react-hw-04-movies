import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundView from './views/NotFoundView';
import Loader from './components/Loader';
import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /* webpackChunkName: "moviesSearch-view" */),
);
function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.homePage} component={HomeView} />
            <Route exact path={routes.moviesPage} component={MoviesView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
