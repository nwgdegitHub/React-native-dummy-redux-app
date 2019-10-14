import { SWITCH } from '../constants/ActionTypes';

const initialState = {
    light: false

};

export default function light(state=initialState, action) {
  switch (action.type) {
    case SWITCH:
      //alert(action.movies);
      //console.log(state);
      return {
          light:!state.light,
        };
      // return {
      //     state=!state,
      //
      // }

    default:
      return state;
  };
}
