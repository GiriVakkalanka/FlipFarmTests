import { MAKE_OFFER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case MAKE_OFFER:
      return action.payload;
    default:
      return state;
  }
}
