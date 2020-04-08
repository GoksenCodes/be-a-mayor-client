import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { fetchCityList, fetchCityByCondition } from '../../store/cityList/actions';
import { selectCities } from '../../store/cityList/selectors';
import CityCard from './CityCard';

export default function CityList() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const [country, setCountry] = useState('all');
  const [continent, setContinent] = useState('all');
  const [population, setPopulation] = useState(0);
  const [price, setPrice] = useState(0);

  
  const populationArray = cities.map(city => {
    return city.population;
  })

  const priceArray = cities.map(city => {
    return city.price;
  })

  const maxPopulation = Math.max(...populationArray);
  const minPopulation = Math.min(...populationArray);

  const maxPrice = Math.max(...priceArray);
  const minPrice = Math.min(...priceArray);
  
  useEffect(() => {
    dispatch(fetchCityList());
    if(minPopulation !== Infinity) {
      setPopulation(minPopulation);
      setPrice(maxPrice);
    }
  }, [dispatch, minPopulation, maxPrice])

  const clickHandler = () => {
    console.log(`
      continent: ${continent}
      country: ${country}
      population: ${population}
      price: ${price}
    `)
    dispatch(fetchCityByCondition(continent, country, population, price));
  }

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
        <label>Minimum value of population:</label>
        <input type="range" value={population} min={minPopulation} max={maxPopulation} onChange={e => setPopulation(e.target.value)} />
        <label>Maximum price:</label>
        <input type="range" value={price} min={minPrice} max={maxPrice} onChange={e => setPrice(e.target.value)} />

        <Button variant="primary" onClick={clickHandler}>Set filters</Button>
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