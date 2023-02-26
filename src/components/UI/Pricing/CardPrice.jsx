import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const CardPrice = ({ content }) => {
  return (
    <Card className='h-100'>
      <Card.Body>
        <h5>{content.title}</h5>
        <h6>{content.price}</h6>
        <Button>Регистрация</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPrice;
