import React, { useEffect, useState } from 'react';
import Section from '../UI/Section/Section';
import CardPrice from './CardPrice';
import { pricingBg } from './Pricing.module.scss';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const Pricing = () => {
  const [pricingList, setPricingList] = useState([]);
  const [listDetails, setListDetails] = useState([]);
  useEffect(() => {
    axios.get('/data/prices.json').then((res) => {
      setPricingList(res.data.prices);
      setListDetails(res.data.listItem);
    });
  }, []);
  return (
    <Section title='Плата' className={pricingBg} titleClassName='text-white'>
      <Row className='mt-5 row-cols-1 row-md-cols-2 row-cols-lg-4 g-5'>
        {!pricingList && <p>Loading ...</p>}
        {pricingList.length > 1 &&
          pricingList.map((priceItem, index) => (
            <Col key={`prices${index}`}>
              <CardPrice content={priceItem} />
            </Col>
          ))}
      </Row>
      <Card className='mt-4 '>
        <Card.Body className='p-4 fw-bold text-success'>
          <p>Плата за участие в конференции (для одного человека) включает:</p>
          <ul className='ps-3'>
            {listDetails.map((list, index) => (
              <li key={index}>
                <p>{list.content}</p>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Section>
  );
};

export default Pricing;
