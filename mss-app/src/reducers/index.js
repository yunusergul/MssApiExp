import movies from './Movies_reducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    movies,
});
export default rootReducer;