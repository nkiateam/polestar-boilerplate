import { fork } from 'redux-saga/effects';

import { startup, nextRedditChange, invalidateReddit} from '../containers/ReduxSagaPage/sagas';

export default function* rootSaga() {
    yield fork(startup);
    yield fork(nextRedditChange);
    yield fork(invalidateReddit);
}