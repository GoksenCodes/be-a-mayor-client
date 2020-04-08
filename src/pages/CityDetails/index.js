import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { fetchCityById } from "../../store/cityDetails/actions";
import { selectCityDetail } from "../../store/cityDetails/selectors";

export default function CityDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector(selectCityDetail);

  useEffect(() => {
    dispatch(fetchCityById(id));
  }, [dispatch, id]);

  return (
    <div className='city-details-container'>
      <img src={city.imageUrl} alt='city' />
      <div className='city-details'>
        <h1>{city.name}</h1>
        <h3>{city.country}</h3>
        <h3>{city.continent}</h3>
        <p>{city.description}</p>
        <p>population: {city.population}</p>
        <p>price: €{city.price}</p>
        {city.inStock ? (
          <p>In stock!</p>
        ) : (
          <p style={{ color: "red" }}>[Sold Out]</p>
        )}
        <NavLink to="" exact={true}>
          <Button variant="primary">Add to cart</Button>
        </NavLink>
      </div>
    </div>
  );
}
