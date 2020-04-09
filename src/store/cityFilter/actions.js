import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";

export function fetchCityByCondition(country, continent, population, price) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/cities/${country}/${continent}/${population}/${price}`
      );
      if (!response.data.length) {
        dispatch(
          showMessageWithTimeout("danger", true, "No result found", 3000)
        );
      }

      dispatch({ type: "FILTER_CITIES", payload: response.data });
    } catch (error) {
      console.log("error: ", error);
    }
  };
}
