const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_BY_ID':
      return { ...action.payload }

    default:
      return state;
  }
}