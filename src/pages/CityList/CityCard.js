import React from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../store/cart/actions";

export default function CityCard(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(props.id));
  };

  return (
    <div className="city-card">
      <Card
        style={{
          width: "20rem",
          margin: "30px",
          marginLeft: "25%",
          boxShadow: "10px 10px 5px grey",
        }}
      >
        <Card.Img
          variant="top"
          src={props.imageUrl}
          style={{
            height: "100%",
            maxHeight: "25em",
          }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{props.name}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <p>
              <b>Country</b>
              <br /> {props.country}
            </p>{" "}
            <p>
              <b>Price</b>
              <br />€{props.price}
            </p>{" "}
            {!props.inStock ? (
              <span style={{ color: "red" }}>[Sold Out]</span>
            ) : (
              ""
            )}
          </Card.Text>
          <NavLink to={`/cities/${props.id}`} exact={true}>
            <Button
              style={{ marginLeft: "23px", boxShadow: "1px 1px 2px grey" }}
              variant="primary"
            >
              View details
            </Button>
          </NavLink>
          {props.inStock ? (
            <Button
              style={{ margin: "11px", boxShadow: "1px 1px 2px grey" }}
              variant="primary"
              onClick={clickHandler}
            >
              Add to cart
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
