import { take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from './actions';
import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_REDDIT, INVALIDATE_REDDIT } from './constants';
import { selectedRedditSelector, postsByRedditSelector } from './selectors';

import { api } from '../../services'

export function* fetchPosts(reddit) {
    yield put( actions.requestPosts(reddit) );
    const posts = yield call(api.fetchPostsApi, reddit);
    yield put( actions.receivePosts(reddit, posts) );
}

export function* invalidateReddit() {
  while (true) {
    const {reddit} = yield take(INVALIDATE_REDDIT);
    yield call( fetchPosts, reddit );
  }
}

export function* nextRedditChange() {
    while(true) {
        const prevReddit = yield select(selectedRedditSelector);

        yield take(SELECT_REDDIT);
        
        const newReddit = yield select(selectedRedditSelector);
        const postsByReddit = yield select(postsByRedditSelector);
        if(prevReddit !== newReddit && !postsByReddit[newReddit]) {
            yield fork(fetchPosts, newReddit);
        }
    }
}

export function* startup() {
    const selectedReddit = yield select(selectedRedditSelector);
    yield fork(fetchPosts, selectedReddit);
}