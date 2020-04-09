import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { fetchCityById } from "../../store/cityDetails/actions";
import { selectCityDetail } from "../../store/cityDetails/selectors";
import { addToCart } from "../../store/cart/actions";

export default function CityDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector(selectCityDetail);

  useEffect(() => {
    dispatch(fetchCityById(id));
  }, [dispatch, id]);

  const clickHandler = () => {
    dispatch(addToCart(city.id));
  };

  return (
    <Container
      style={{
        boxShadow: "10px 10px 5px grey",
        background: "#f2f0ea",
        marginTop: "30px",
      }}
    >
      <div className="city-details-container">
        <img src={city.imageUrl} alt="city picture" />
        <div className="city-details">
          <p>
            City<h1>{city.name}</h1>
          </p>
          <p>
            Country
            <h3>{city.country}</h3>
          </p>
          <p>
            Continent
            <h3>{city.continent}</h3>
          </p>
          <p>
            <b>Description</b>
            <p>{city.description}</p>
          </p>
          <p>
            <b>Population</b>
            <br />
            {city.population}
          </p>
          <p>
            <b>Price</b>
            <br />€{city.price}
          </p>
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
    </Container>
  );
}
