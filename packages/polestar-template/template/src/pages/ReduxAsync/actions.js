import { /* POSTS, */ POSTS_PENDING, POSTS_SUCCESS, POSTS_FAILURE, SELECT_REDDIT } from './constants';
import { api } from '../../services';

// export function selectReddit(reddit) {
//     return {
//         type: SELECT_REDDIT,
//         reddit
//     }
// }

// export function invalidateReddit(reddit) {
//     return {
//         type: INVALIDATE_REDDIT,
//         reddit
//     }
// }

// export function requestPosts(reddit) {
//     return {
//         type: POSTS_PENDING,
//         reddit
//     }
// }

// export function receivePosts(reddit, posts) {
//     return {
//         type: POSTS_SUCCESS,
//         reddit,
//         posts,
//         receivedAt: Date.now()
//     }
// }

// redux-promise-middleware
// export const fetchPosts = (reddit) => ({
//     type: POSTS,
//     payload: api.fetchPostsApi(reddit),
//     meta: { reddit, receivedAt: Date.now() }
// })

export const fetchPosts = (reddit) => dispatch => {
    dispatch({ type: POSTS_PENDING, reddit });

    return api.fetchPostsApi(reddit)
        .then((response) => {
            dispatch({
                type: POSTS_SUCCESS,
                payload: response,
                reddit,
                receivedAt: Date.now(),
            });
        })
        .catch(error => {
            dispatch({
                type: POSTS_FAILURE,
                payload: error,
            });
        });
};

export const selectReddit = (reddit) => (dispatch, getState) => {
    const { selectedReddit, postsByReddit } = getState();
    dispatch({ type: SELECT_REDDIT, reddit });

    if (selectedReddit !== reddit && !postsByReddit[reddit]) {
        dispatch(fetchPosts(reddit));
    }
};
