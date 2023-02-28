import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-green-400 text-white'>
      <Container className='p-3 p-lg-7'>
        <Row className='gy-4 gx-5 fw-bold fs-8'>
          <Col>
            <Row>
              <Col xs={12}>
                <h6 className='fs-6 fw-bold'>Ответственные:</h6>
                <p>
                  со стороны КГАСУ - Заведущий кафедрой ”ТСМИК” д.т.н., проф.
                  Хозин Вадим Григорьевич, e-mail: Khosin@kgasu.ru тел. +7 (843)
                  2383913, Д.т.н., проф. Абдурахманова Ляля Абдуловна e-mail:
                  laa@ksaba.ru тел./факс: 8(843)2383913
                </p>
              </Col>
              <Col>
                <p>
                  со стороны ТАСИ: Тулаганов Абдукабил Абдунабиевич – Заведующий
                  кафедрой «ТСМИК», e-mail: abdukabiltulaganov@gmail.com тел.
                  +998-(71) - 234-28-59; Умматов Элмурат – Начальник центра
                  информационных технологий, e-mail: tasi.info@gmail.com тел.:
                  +998-977757065
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <h6 className='fs-6 fw-bold'>Адрес ТАСИ:</h6>
            <p>
              100084, г. Ташкент, ул. Кичик халка йули, 7, Ташкентский
              архитектурно-строительный институт (ТАСИ) Сайт: taqi.uz
            </p>
          </Col>
          <Col>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505691.98111145524!2d112.13979817584313!3d-8.027922854783121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788281bdd08839%3A0xc915f268bffa831f!2sState%20University%20of%20Malang!5e0!3m2!1sen!2sid!4v1677426002788!5m2!1sen!2sid'
              width='400'
              height='300'
              style={{ border: 0 }}
              allowfullscreen=''
              loading='lazy'
              className='img-fluid'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </Col>
        </Row>
      </Container>
      <div className='py-3 text-white bg-green-300 text-center'>
        <Container>
          &copy; Ташкентский архитектурно-строительный институт | 2020г.
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
