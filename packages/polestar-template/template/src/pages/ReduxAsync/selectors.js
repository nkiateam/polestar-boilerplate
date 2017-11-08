export const selectedRedditSelector = state => state.get('selectedReddit');
export const postsByRedditSelector = state => state.get('postsByReddit');

// // react-boilerplate
// import { createSelector } from 'reselect';

// const selectHome = (state) => state.get('home');

// const makeSelectUsername = () => createSelector(
//     selectHome,
//     (homeState) => homeState.get('username')
// );

// export {
//     selectHome,
//     makeSelectUsername,
// };