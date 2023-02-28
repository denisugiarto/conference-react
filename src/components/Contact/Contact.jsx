import React from 'react';
import {
    Col,
    Container,
    Row
} from 'react-bootstrap';
import Section from '../UI/Section/Section';
import ContactForm from './ContactForm';
import DetailContact from './DetailContact';

const Contact = () => {
  return (
    <Section title='Контакты'>
      <div className='mt-3 mt-lg-6'>
        <Row className='gy-5 row-cols-1 row-cols-lg-2'>
          <Col>
            <DetailContact />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default Contact;
