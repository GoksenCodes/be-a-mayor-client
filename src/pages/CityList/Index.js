import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron } from "react-bootstrap";
import { fetchCityList } from '../../store/cityList/actions';

export default function CityList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityList());
  }, [dispatch])

  return (
    <div className='city-list'>
      <Jumbotron>
        <h1>Browse through our list of cities</h1>
      </Jumbotron>
    </div>
  )
}