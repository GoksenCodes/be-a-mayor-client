const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("STATE", state);
      console.log("action", action.payload);
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      console.log("STATE", state);
      console.log("action", action.payload);
      const cityId = action.payload;
      const newCart = state.filter(city => city.id !== cityId);
      console.log(newCart);
      return [...newCart];

    default:
      return state;
  }
};
