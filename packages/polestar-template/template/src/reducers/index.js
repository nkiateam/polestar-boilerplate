import { combineReducers } from 'redux';

import { counter, extra } from '../pages/ReduxPage/reducer';
import { selectedReddit, postsByReddit } from '../pages/ReduxAsyncPage/reducer';

const rootReducer = combineReducers({
    counter,
    extra,
    selectedReddit,
    postsByReddit,
});

export default rootReducer;