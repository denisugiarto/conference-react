import React from 'react';
import Section from '../UI/Section/Section';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <Section title='Контакты'>
      <Container>
        <Row className='mt-5'>
          <Col>
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
          </Col>
          <Col>
            <Form>
              <FormControl
                className='mb-2 shadow'
                placeholder='Имя*'
                required
              ></FormControl>
              <FormControl
                className='mb-2 shadow'
                placeholder='Фамилия*'
                required
              ></FormControl>
              <FormControl
                className='mb-2 shadow'
                placeholder='Элекьронная почта*'
                required
              ></FormControl>
              <FormControl
                className='mb-2 shadow'
                placeholder='Phone'
              ></FormControl>
              <FormControl
                className='mb-5 shadow'
                placeholder='Сообщение*'
                required
              ></FormControl>
            </Form>
            <div className='text-center'>
              <Button className='px-6'>Отправить</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
