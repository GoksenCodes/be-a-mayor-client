//check the navbar, change the name of the folder

import React from "react";
import ShoppingCart from "./ShoppingCart";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteCityfromCart } from "../../store/cart/actions";
import { selectCitiesIntheCart } from "../../store/cart/selectors";

export default function Checkout() {
  // const citiesIntheCart=  [1,3,5]
  // localStorage.setItem("cart", citiesIntheCart);

  // const currentCityIdsintheCart = localStorage.getItem("cart")

  // const cities = useSelector(selectCities);

  // const currentCitiesintheCard = cities.filter(city => citiesIntheCart.includes(city.id))

  ///////
  console.log(useSelector(selectCitiesIntheCart));
  const citiesIntheCart = useSelector(selectCitiesIntheCart);

  console.log(citiesIntheCart);
  const prices = citiesIntheCart.map(a => a.price);

  console.log(prices);

  const totalPrice = prices.reduce((a, b) => a + b, 0);
  console.log(totalPrice);

  let itemNo = 0; //this needs to be defined outside of map scope, if we define it in the map function, it will get reset to zero in every iteration of the map
  const dispatch = useDispatch();

  const deleteCity = id => {
    dispatch(deleteCityfromCart(id));
  };

  return (
    <div>
      <h3>Shopping cart</h3>
      {citiesIntheCart.map((cityIntheCart, num) => {
        itemNo++; //we add itemno as a prop outside of the object that we map
        return (
          <ShoppingCart
            key={num}
            itemNo={itemNo}
            name={cityIntheCart.name}
            price={cityIntheCart.price}
            id={cityIntheCart.id}
            deleteCity={deleteCity}
          />
        );
      })}
      <div>
        <ListGroup horizontal>
          <ListGroup.Item>Total Price </ListGroup.Item>
          <ListGroup.Item>{totalPrice} ₿</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

// export const addCityToCart = (cityId) => {
//   const userId = state.user.id
//   const cityAddedTOCart = { cityId, userId }
//   dispatch({ type: "CITY_ADDED_TO_CART", payload: cityAddedTOCart });
// }

//localStorage.setItem("cart", action.payload);
// action payload = {userId:${userId} items: [1,5,7]} // (city ids in the cart)
