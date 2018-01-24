import { FETCH_SENT_OFFERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SENT_OFFERS:
      return action.payload;
    default:
      return state;
  }
}
