import {
  GET_CUISINES,
  GET_RESTAURANT,
  GET_CHECKED,
  GET_FILTERED,
} from "./actions";

const initialState = {
  cuisinFile: null,
  restaurantFile: null,
  checked: null,
  filtered: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUISINES:
      return {
        ...state,
        cuisinFile: action.payload,
      };
    case GET_RESTAURANT:
      return {
        ...state,
        restaurantFile: action.payload,
      };
    case GET_CHECKED:
      return {
        ...state,
        checked: action.payload,
      };
    case GET_FILTERED:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
}
