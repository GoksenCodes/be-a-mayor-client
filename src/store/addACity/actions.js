import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";

export const ADD_CITY_ADDED = "ADD_CITY_ADDED";

const addCityAdded = (addcity) => {
  return {
    type: ADD_CITY_ADDED,
    payload: addcity,
  };
};

export const addCity = (
  name,
  imageUrl,
  country,
  continent,
  description,
  population,
  price,
  // inStock,
  history
) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    const id = state.user.id;

    // console.log(token);

    const response = await axios.post(
      `${apiUrl}/cities`,
      {
        name,
        imageUrl,
        country,
        continent,
        description,
        population,
        price,
        inStock: true,
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response!", response);
    dispatch(showMessageWithTimeout("success", true, "City Created"));
    dispatch(addCityAdded(response.data));
    history.push("/");
  };
};
