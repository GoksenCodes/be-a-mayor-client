import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function ShoppingCart(props) {
  const idtodelete = props.id;
  const onDelete = idtodelete => {
    console.log("delete city", idtodelete);
    props.deleteCity(idtodelete);
  };

  return (
    <div>
      <ListGroup horizontal>
        <ListGroup.Item>item # {props.itemNo} </ListGroup.Item>
        <ListGroup.Item>{props.name}</ListGroup.Item>
        <ListGroup.Item>{props.price} ₿</ListGroup.Item>
        <Button variant="danger" onClick={() => onDelete(props.id)}>
          Remove item
        </Button>
      </ListGroup>
    </div>
  );
}
