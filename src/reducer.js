import { combineReducers } from 'redux';

import coinsReducer from './components/coins/coinsSlice';
import marketsReducer from './components/markets/marketsSlice';

const rootReducer = combineReducers({
  coins: coinsReducer,
  markets: marketsReducer
});

export default rootReducer;