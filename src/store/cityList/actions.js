import axios from 'axios';
import { apiUrl } from "../../config/constants";

const cities = [
  {
    name: 'Oslo',
    imageUrl: 'https://images.unsplash.com/photo-1468930830753-6699377de411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'Norway',
    continent: 'Europe',
    description: 'Usually it is cold, but has a very nice country side.',
    population: 693491,
    price: 9999,
    inStock: true,
    userId: null
  },
  {
    name: 'Amsterdam',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'the Netherlands',
    continent: 'Europe',
    description: 'Super cool city, nice place to live and be free.',
    population: 9090909,
    price: 999999999,
    inStock: true,
    userId: null 
  },
  {
    name: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'United States of America',
    continent: 'America',
    description: 'They used to call it New Amsterdam.',
    population: 123456789,
    price: 9999999991234,
    inStock: false,
    userId: null 
  },
  {
    name: 'Oslo',
    imageUrl: 'https://images.unsplash.com/photo-1468930830753-6699377de411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'Norway',
    continent: 'Europe',
    description: 'Usually it is cold, but has a very nice country side.',
    population: 693491,
    price: 9999,
    inStock: false,
    userId: null
  },
  {
    name: 'Amsterdam',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'the Netherlands',
    continent: 'Europe',
    description: 'Super cool city, nice place to live and be free.',
    population: 9090909,
    price: 999999999,
    inStock: false,
    userId: null 
  },
  {
    name: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    country: 'United States of America',
    continent: 'America',
    description: 'They used to call it New Amsterdam.',
    population: 123456789,
    price: 9999999991234,
    inStock: true,
    userId: null 
  }
]



export function fetchCityList() {
  return async (dispatch, getState) => {
    const response = cities;

    dispatch({ type: 'FETCH_CITIES_SUCCES', payload: response})
    
  }
}