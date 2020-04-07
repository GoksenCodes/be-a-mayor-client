import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { fetchCityList } from '../../store/cityList/actions';
import { selectCities } from '../../store/cityList/selectors';
import CityCard from './CityCard';

export default function CityList() {
  const [condition, setCondition] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);

  useEffect(() => {
    if(condition === 'country') {
      
    } else if(condition === 'continent') {

    } else {
      
    }
    dispatch(fetchCityList());
  }, [dispatch])
  
  console.log('condition: ', condition)
  return (
    <div className='city-page'>
      <Jumbotron>
        <h1>Browse through our list of cities</h1>
      </Jumbotron>
      <div className='filter-buttons'>
        <Button variant="primary" onClick={() => setCondition('continent')} >Sort by continent</Button>
        <Button variant="primary" onClick={() => setCondition('country')}>Sort by country</Button>
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