import React from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../store/cart/actions';

export default function CityCard(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(props.id));
  }


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
          {props.inStock 
          ?  <Button variant="primary" onClick={clickHandler}>Add to cart</Button> 
          : ''}
        </Card.Body>
      </Card>
    </div>
  )
}