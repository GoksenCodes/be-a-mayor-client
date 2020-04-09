import axios from "axios";
import { apiUrl } from "../../config/constants";

export function fetchCityList() {
  return async (dispatch, getState) => {
    const state = getState();
    const response = await axios.get(`${apiUrl}/cities`);
    if (state.cityList.length !== 0) return;

    dispatch({ type: "FETCH_CITIES_SUCCES", payload: response.data });
  };
}
