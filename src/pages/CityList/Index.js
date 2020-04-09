import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchCityList } from "../../store/cityList/actions";
import { selectCities } from "../../store/cityList/selectors";
import CityCard from "./CityCard";

export default function CityList() {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);

  useEffect(() => {
    dispatch(fetchCityList());
  }, [dispatch]);

  return (
    <div className="city-page">
      <Jumbotron
        style={{
          background: "#f2f0ea",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 300,
          }}
        >
          Browse through our list of cities
        </h1>
      </Jumbotron>
      <div className="city-list">
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
          );
        })}
      </div>
    </div>
  );
}
