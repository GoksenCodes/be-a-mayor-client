import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { fetchCityList } from "../../store/cityList/actions";
import { selectCities } from "../../store/cityList/selectors";
import CityCard from "./CityCard";
import { selectFilteredCities } from "../../store/cityFilter/selectors";
import { fetchCityByCondition } from "../../store/cityFilter/actions";
import { setMessage } from "../../store/appState/actions";

export default function CityList() {
  const dispatch = useDispatch();
  const citiesList = useSelector(selectCities);
  const filteredCities = useSelector(selectFilteredCities);
  const [country, setCountry] = useState("all");
  const [continent, setContinent] = useState("all");
  const [population, setPopulation] = useState(0);
  const [price, setPrice] = useState(0);
  const [toggle, setToggle] = useState("list");

  const populationArray = citiesList.map(city => {
    return city.population;
  });

  const priceArray = citiesList.map(city => {
    return city.price;
  });

  const maxPopulation = Math.max(...populationArray);
  const minPopulation = Math.min(...populationArray);

  const maxPrice = Math.max(...priceArray);
  const minPrice = Math.min(...priceArray);

  useEffect(() => {
    dispatch(fetchCityList());
    if (minPopulation !== Infinity) {
      setPopulation(minPopulation);
      setPrice(maxPrice);
    }
  }, [dispatch, minPopulation, maxPrice]);

  const clickHandler = () => {
    dispatch(fetchCityByCondition(country, continent, population, price));
    setToggle("filter");
  };

  const resetHandler = () => {
    setToggle("list");
    setPrice(maxPrice);
    setPopulation(minPopulation);
  };

  const cities = toggle === "list" ? citiesList : filteredCities;

  return (
    <div className="city-page">
      <Jumbotron>
        <h1>Browse through our list of cities</h1>
      </Jumbotron>

      <form>
        <div className="filter-buttons">
          <div className="country-filter">
            <label htmlFor="country-select">Sort by country:</label>
            <select
              name="country"
              id="country-select"
              onChange={e => setCountry(e.target.value)}
            >
              <option value="all">--Please choose an option--</option>
              <option value="all">all</option>
              {citiesList.map(city => {
                return (
                  <option value={city.country} key={city.id}>
                    {city.country}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="continent-filter">
            <label htmlFor="continent-select">Sort by continent:</label>
            <select
              name="continent"
              id="continent-select"
              onChange={e => setContinent(e.target.value)}
            >
              <option value="all">--Please choose an option--</option>
              <option value="all">all</option>
              {citiesList.map(city => {
                return (
                  <option value={city.continent} key={city.id}>
                    {city.continent}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="population-filter">
            <label>Minimum value of population:</label>
            {population}
            <input
              type="range"
              value={population}
              min={minPopulation}
              max={maxPopulation}
              onChange={e => setPopulation(e.target.value)}
            />
          </div>

          <div className="price-filter">
            <label>Maximum price:</label>
            {price}
            <input
              type="range"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <Button className="button" variant="primary" onClick={clickHandler}>
            Set filters
          </Button>
          <Button
            className="button"
            type="reset"
            value="Reset"
            variant="primary"
            onClick={resetHandler}
          >
            Reset
          </Button>
        </div>
      </form>

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
