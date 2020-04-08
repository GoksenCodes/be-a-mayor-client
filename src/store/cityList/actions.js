import axios from 'axios';
import { apiUrl } from "../../config/constants";

export function fetchCityList() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/cities`)

    dispatch({ type: 'FETCH_CITIES_SUCCES', payload: response.data })
    
  }
}

