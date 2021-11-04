import { client } from '../../api/client';

const initialState = [];

export default function marketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'markets/fetch':
      return action.payload;
    default:
      return state;
  }
}

export async function fetchMarkets(dispatch) {
  const url = process.env.REACT_APP_API_ENDPOINT + 'coins/markets?vs_currency=EUR&per_page=10';
  const response = await client.get(url);
  dispatch({ type: 'markets/fetch', payload: response });
};