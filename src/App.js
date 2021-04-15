import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//import NotFoundView from './views/NotFoundView';
import AppBar from './components/AppBar';
import routes from './routes';

function App() {
  return (
    <>
      <AppBar />

      {/* <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.authors} component={AuthorsView} />
          <Route exact path={routes.books} component={BooksView} />
          <Route path={routes.bookDetails} component={BookDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense> */}
    </>
  );
}

export default App;
