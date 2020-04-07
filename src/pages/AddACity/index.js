import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddaCity } from "../../store/user/actions";

export default function AddACity() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [continent, setContinent] = useState("");
  const [description, setDescription] = useState("");
  const [population, setPopulation] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInstock] = useState(true);

  function submitAddACity(event) {
    event.preventDefault();

    dispatch(
      AddACity(
        name,
        country,
        imageUrl,
        continent,
        description,
        population,
        price,
        inStock
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
            class="col"
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
            class="form-control"
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
          <div class="input-group">
            <select
              class="custom-select"
              id="inputGroupSelect04"
              onChange={(event) => setContinent(event.target.value)}
              value={continent}
            >
              <option selected>Choose your continent</option>
              <option value="1">North America</option>
              <option value="2">South America</option>
              <option value="4">Europe</option>
              <option value="5">Africa</option>
              <option value="6">Asia</option>
              <option value="7">Australia</option>
            </select>
            <div class="input-group-append"></div>
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
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">€</span>
            <span class="input-group-text">0.00</span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Amount (to the nearest euro)"
          />
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            checked
            disabled
            value={inStock}
            onChange={setInstock}
          />
          <label class="form-check-label" for="exampleCheck1">
            City in stock
          </label>
        </div>

        <Button className="mt-3 mb-5" type="submit" onClick={submitAddACity}>
          Add City
        </Button>
      </Container>
    </>
  );
}
