import React from 'react';
import { Card } from 'react-bootstrap';

const ClientCard = ({ dataClient }) => {
  return (
    <Card className='shadow h-100 text-center'>
      <Card.Body>
        <img src={dataClient.imgUrl} alt='' className='img-fluid' />
        <p className='fs-8 fw-bold mt-2'>{dataClient.title}</p>
      </Card.Body>
    </Card>
  );
};

export default ClientCard;
