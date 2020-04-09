const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_CITIES':
      return [...action.payload];
    
    default:
      return state;
  }
}