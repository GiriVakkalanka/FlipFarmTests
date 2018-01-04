import { ACCEPT_OFFER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ACCEPT_OFFER:
      return action.payload;
    default:
      return state;
  }
}
