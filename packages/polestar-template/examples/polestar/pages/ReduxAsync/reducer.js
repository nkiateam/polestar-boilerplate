import { SELECT_REDDIT, POSTS_PENDING, POSTS_SUCCESS } from './constants';

const posts = (state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case POSTS_PENDING:
            return { ...state, isFetching: true }

        case POSTS_SUCCESS:
            return { ...state,
                isFetching: false,
                items: action.payload,
                lastUpdated: action.receivedAt
            }
        default:
            return state;
    }
};

export const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

export const postsByReddit = (state = { }, action) => {
    switch (action.type) {
        case POSTS_PENDING:
        case POSTS_SUCCESS:
            console.log('POSTS_SUCCESS', action);
            return { ...state,
                [action.reddit]: posts(state[action.reddit], action)
            }
        default:
            return state;
    }
};