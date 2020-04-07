import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function CityCard(props) {
  return (
    <div className='city-card'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            country: {props.country} <br />
            price: {props.price} <br />
            {!props.inStock ? <span style={{color: 'red'}}>[Sold Out]</span> : ''}
          </Card.Text>
          <NavLink to={`/cities/${props.id}`} exact={true}>
            <Button variant="primary">View details</Button>
          </NavLink>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}