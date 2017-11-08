import { combineReducers } from 'redux';

import { counter, extra } from '../pages/Redux/reducer';
import { selectedReddit, postsByReddit } from '../pages/ReduxAsync/reducer';

const rootReducer = combineReducers({
    counter,
    extra,
    selectedReddit,
    postsByReddit,
});

export default rootReducer;