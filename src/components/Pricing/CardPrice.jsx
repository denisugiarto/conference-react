import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './CardPrice.scss';

const CardPrice = ({ content }) => {
  const currency = content.price.split(' ').length > 1 ? '' : '&euro';
  return (
    <Card className='h-100'>
      <Card.Body className='text-center'>
        <h5 className='fs-6 fw-bold card-content__title'>{content.title}</h5>
        <h6 className='fw-bold fs-2 my-4'>{`${content.price} ${currency}`} </h6>
        <Button className='fs-6 fw-bold'>Регистрация</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPrice;
