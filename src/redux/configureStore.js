import { combineReducers, createStore } from 'redux';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  mission: missionReducer,
});

const store = createStore(rootReducer, {});

export default store;
