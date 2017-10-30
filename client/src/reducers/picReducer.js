import { FETCH_PIC } from '../actions/types';

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_PIC:
      return action.payload;
    default:
      return state;
  }
}
