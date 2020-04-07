import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { fetchCityById } from '../../store/cityDetails/actions';

export default function CityDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityById(id));
  }, [dispatch, id]);

  return (
    <div className='city-details'>
      <h1>City name</h1>
    </div>
  )
}