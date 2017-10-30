import { combineReducers } from 'redux';

import { counter, extra } from '../containers/ReduxPage/reducer';
import { selectedReddit, postsByReddit } from '../containers/ReduxAsyncPage/reducer';

const rootReducer = combineReducers({
    counter,
    extra,
    selectedReddit,
    postsByReddit,
});

export default rootReducer;