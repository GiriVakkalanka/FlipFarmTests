import { LOAD_ITEM } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case LOAD_ITEM:
      return action.payload;
    default:
      return state;
  }
}
