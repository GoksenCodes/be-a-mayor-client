import axios from 'axios'
import { apiUrl } from "../../config/constants";

export function fetchCityById(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/cities/${id}`)

    dispatch({type: 'CITY_BY_ID', payload: response.data});
  }
}