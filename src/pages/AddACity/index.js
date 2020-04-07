import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCity } from "../../store/addACity/actions";

export default function AddACity() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [continent, setContinent] = useState("");
  const [description, setDescription] = useState("");
  const [population, setPopulation] = useState("");
  const [price, setPrice] = useState("");

  function submitAddACity(event) {
    event.preventDefault();

    dispatch(
      addCity(
        name,
        country,
        imageUrl,
        continent,
        description,
        population,
        price
      )
    );
  }

  return (
    <>
      <Jumbotron>
        <h1>Add a city</h1>
      </Jumbotron>
      <h2 className="text-center">Add a new city for buy</h2>

      <Container className="flex-row">
        <Form>
          <Form.Label className="mt-5">City name</Form.Label>
          <Form.Control
            className="col"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name of your City"
          ></Form.Control>

          <Form.Label className="mt-3">Description</Form.Label>
          <textarea
            value={description}
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe your city"
            rows="3"
            className="form-control"
          ></textarea>

          <Form.Label className="mt-3">Image Url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="https://"
          ></Form.Control>

          <Form.Label className="mt-3">Country</Form.Label>
          <Form.Control
            value={country}
            type="text"
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Which country is your city located.."
          ></Form.Control>

          <Form.Label className="mt-3">Choose continent</Form.Label>
          <div className="input-group">
            <select
              className="custom-select"
              id="inputGroupSelect04"
              onChange={(event) => setContinent(event.target.value)}
              value={continent}
            >
              <option defaultValue>Choose your continent</option>
              <option value="1">North America</option>
              <option value="2">South America</option>
              <option value="4">Europe</option>
              <option value="5">Africa</option>
              <option value="6">Asia</option>
              <option value="7">Australia</option>
              <option value="8">EuroAsia</option>
            </select>
            <div className="input-group-append"></div>
          </div>

          <Form.Label className="mt-3">Population</Form.Label>
          <Form.Control
            value={population}
            type="number"
            onChange={(event) => setPopulation(event.target.value)}
            placeholder="Population"
          ></Form.Control>
        </Form>

        <Form.Label
          className="mt-3"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        >
          Price
        </Form.Label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">€</span>
            <span className="input-group-text">0.00</span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest euro)"
          />
        </div>

        <Button className="mt-3 mb-5" type="submit" onClick={submitAddACity}>
          Add City
        </Button>
      </Container>
    </>
  );
}
