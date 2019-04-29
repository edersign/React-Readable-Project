import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({
  collapsed: true,
 });

function configureStore({ initialState, req }) {
  const enhancers = compose(
    applyMiddleware(thunk,
       logger
      ),
    process.env.NODE_ENV === 'development' &&
      typeof window !== 'undefined' &&
      typeof window.devToolsExtension !== 'undefined'
      ? // Call the brower extension function to create the enhancer.
        window.devToolsExtension()
      : // Else we return a no-op function.
        f => f
  );

  const store = initialState
    ? createStore(rootReducer, initialState, enhancers)
    : createStore(rootReducer, enhancers);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers. This is so that we
    // don't lose all of our current application state during hot reloading.
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
