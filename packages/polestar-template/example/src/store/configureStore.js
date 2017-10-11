import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '../sagas/sagaMonitor';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware({sagaMonitor})
    return {
        ...createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}