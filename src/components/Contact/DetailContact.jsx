import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

const DetailContact = () => {
  return (
    <>
      <Row className='mb-5'>
        <Col xs='auto'>
          <GeoAltFill className='text-primary' />
        </Col>
        <Col className='fs-6 fw-bold'>
          <p>Адрес:</p>
          <p>
            100084, г. Ташкент, ул. Кичик халка йули, 7, Ташкентский
            архитектурно-строительный институт (ТАСИ)
          </p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col xs='auto'>
          <TelephoneFill className='text-primary' />
        </Col>
        <Col className='fs-6 fw-bold'>
          <p>Телефон:</p>
          <p>
            Тулаганов Абдукабил Абдунабиевич Заведующий кафедрой «ТСМИК»
            +998-(71) - 234-28-59,
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs='auto'>
          <EnvelopeFill className='text-primary' />
        </Col>
        <Col className='fs-6 fw-bold'>
          <p>Электронная почта:</p>
          <p>
            Тулаганов Абдукабил Абдунабиевич Заведующий кафедрой «ТСМИК»
            abdukabiltulaganov@gmail.com
          </p>
        </Col>
      </Row>
    </>
  );
};

export default DetailContact;
