import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_REDDIT, INVALIDATE_REDDIT } from './constants';

export function selectReddit(reddit) {
    return {
        type: SELECT_REDDIT,
        reddit
    }
}
  
export function invalidateReddit(reddit) {
    return {
        type: INVALIDATE_REDDIT,
        reddit
    }
}

export function requestPosts(reddit) {
    return {
        type: REQUEST_POSTS,
        reddit
    }
}

export function receivePosts(reddit, posts) {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts,
        receivedAt: Date.now()
    }
}