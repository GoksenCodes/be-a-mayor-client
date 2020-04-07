import axios from 'axios'
import { apiUrl } from "../../config/constants";

export function addToCart(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/cities/${id}`)

    dispatch({type: 'ADD_TO_CART', payload: response.data});
  }
}