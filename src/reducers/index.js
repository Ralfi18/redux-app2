import { combineReducers } from 'redux';
import WetherReucer from './reducer_wether';

const rootReducer = combineReducers({
  state: WetherReucer
})

export default rootReducer;