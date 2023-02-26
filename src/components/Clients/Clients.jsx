import React, { useEffect, useState } from 'react';
import Section from '../UI/Section/Section';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import ClientCard from './ClientCard';

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get('/data/clients.json')
      .then((res) => setClients(res.data.clients))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <Section title='Спонсоры' className='bg-light'>
      <Row className='mt-5'>
        {clients.map((client, index) => (
          <Col key={index}>
            <ClientCard dataClient={client} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Clients;
