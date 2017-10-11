import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import App from './containers/App';

// import { createStore } from 'redux';
import { Provider  } from 'react-redux';

// import rootReducer from './reducers';
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
