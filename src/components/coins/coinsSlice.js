import { client } from '../../api/client';

const initialState = [];

export default function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case 'coins/fetch':
      return action.payload;
    case 'coins/flush':
      return initialState;
    default:
      return state;
  }
}

export function fetchCoin(id) {
  return async function fetchCoinThunk(dispatch) {
    const url = process.env.REACT_APP_API_ENDPOINT + 'coins/' + id;
    const response = await client.get(url);
    dispatch({ type: 'coins/fetch', payload: response });
  };
}

export function flushCoin(dispatch) {
  dispatch({ type: 'coins/flush', payload: [] });
}