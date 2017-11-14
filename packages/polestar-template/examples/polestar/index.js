import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styles가 Pages import 보다 위에 있어야 함 ----------------
import 'styles/font-awesome-4.7.0/css/font-awesome.min.css';
import 'styles/index.less';
//----------------------------------------------------------

// Pages가 Styles import 보다 아래 있어야 함 ----------------
import App from 'pages/App';
//----------------------------------------------------------

import configureStore from './store/configureStore';

const store = configureStore();

// import { createStore } from 'redux';
// import rootReducer from './reducers';
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
