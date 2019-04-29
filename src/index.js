import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './containers/error';
import App from './containers/App';
import configureStore from './store';

const store = configureStore({ initialState: window.__REDUX_STATE__ }, {});

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ErrorBoundary>
    {hasError => (
      <Provider store={store}>
        <BrowserRouter>
          <App hasError={hasError} />
        </BrowserRouter>
      </Provider>
    )}
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
