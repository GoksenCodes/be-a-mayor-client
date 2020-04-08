console.log(localStorage.getItem("cart"));

const storedCart = localStorage.getItem("cart");

const initialState = storedCart ? JSON.parse(storedCart) : [];

// const initialState = JSON.parse(localStorage.getItem("cart") || "[]");

// const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("STATE", state);
      console.log("action", action.payload);
      localStorage.setItem("cart", JSON.stringify([...state, action.payload])); //by doing this it saves the state both in redux state & local storage
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      console.log("STATE", state);
      console.log("action", action.payload);
      const cityId = action.payload;
      const newCart = state.filter(city => city.id !== cityId);
      console.log(newCart);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return [...newCart];

    default:
      return state;
  }
};
