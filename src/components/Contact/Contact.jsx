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
      <Container>
        <Row className='mt-1 gy-5 row-cols-1 row-cols-lg-2'>
          <Col>
            <DetailContact />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
