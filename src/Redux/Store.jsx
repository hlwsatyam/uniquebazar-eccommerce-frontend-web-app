import { createStore, combineReducers } from 'redux';
import { ProfileNavigationReducer, filterDataReducer } from './Reducer';

const rootReducer = combineReducers({
  profileNavigatoreValue: ProfileNavigationReducer,
  filteredDataValue: filterDataReducer
});

export const Store = createStore(rootReducer);
