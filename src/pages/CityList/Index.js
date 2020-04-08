import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { fetchCityList } from '../../store/cityList/actions';
import { selectCities } from '../../store/cityList/selectors';
import CityCard from './CityCard';

export default function CityList() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const [country, setCountry] = useState('all');
  const [continent, setContinent] = useState('all');

  useEffect(() => {
    dispatch(fetchCityList());
    if(country !== 'all' || continent !== 'all') {
      // dispatch(fetchCityByCondition(country, continent))
    }
  }, [dispatch])
  
  console.log('country: ', country, 'continent: ', continent);
  return (
    <div className='city-page'>
      <Jumbotron>
        <h1>Browse through our list of cities</h1>
      </Jumbotron>

      <div className='filter-buttons'>
        <label htmlFor="country-select">Sort by country:</label>
        <select name="country" id="country-select" onChange={(e) => setCountry(e.target.value)}>
          <option value="all">--Please choose an option--</option>
           {cities.map(city => {
             return (
                <option value={city.country} key={city.id}>{city.country}</option>
             )
           })}
        </select>
        <label htmlFor="continent-select">Sort by continent:</label>
        <select name="continent" id="continent-select" onChange={(e) => setContinent(e.target.value)}>
          <option value="all">--Please choose an option--</option>
           {cities.map(city => {
             return (
                <option value={city.continent} key={city.id}>{city.continent}</option>
             )
           })}
        </select>
      </div>

      <div className='city-list'>
        {cities.map((city, num) => {
          return (
            <CityCard 
              name={city.name}
              imageUrl={city.imageUrl}
              country={city.country}
              price={city.price}
              inStock={city.inStock}
              key={num}
              id={city.id}
            />
          )
        })}
      </div>
    </div>
  )
}