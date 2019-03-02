import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import topologyReducer from './topologyReducer';
export default combineReducers({
 simpleReducer,
 topologyReducer,

});