import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  mission: missionReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
