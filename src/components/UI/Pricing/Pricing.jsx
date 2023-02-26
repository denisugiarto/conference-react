import React, { useEffect, useState } from 'react';
import Section from '../Section/Section';
import CardPrice from './CardPrice';
import { pricingBg } from './Pricing.module.scss';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const Pricing = () => {
  const [pricingList, setPricingList] = useState([]);
  useEffect(() => {
    axios
      .get('/data/prices.json')
      .then((res) => setPricingList(res.data.prices));
    console.log(pricingList);
  }, []);
  return (
    <Section title='Плата' className={pricingBg} titleClassName='text-white'>
      <Row className='mt-7'>
        {pricingList.length > 1 &&
          pricingList.map((priceItem) => (
            <Col>
              <CardPrice content={priceItem} />
            </Col>
          ))}
      </Row>
    </Section>
  );
};

export default Pricing;
