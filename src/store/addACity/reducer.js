import { ADD_CITY_ADDED } from "../addACity/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY_ADDED:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
