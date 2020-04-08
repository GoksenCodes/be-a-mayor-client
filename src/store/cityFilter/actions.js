import axios from 'axios';
import { apiUrl } from "../../config/constants";


export function fetchCityByCondition(country, continent, population, price) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/cities/${country}/${continent}/${population}/${price}`);
      
      dispatch({ type: 'FILTER_CITIES', payload: response.data })
    }
    catch (error) {
      console.log('error: ', error);
    }
  }
}