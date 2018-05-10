import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

const logger = createLogger();
// const customizedPromiseMiddleware = promiseMiddleware({
//     promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
// });

// const configureStore = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware)
// );

// export default configureStore;

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(logger, ReduxThunk/* , customizedPromiseMiddleware */),
    );
}
