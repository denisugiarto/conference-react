import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white">
      <Container className="p-3 p-lg-7">
        <Row className="gy-4 gx-5 fw-bold fs-8">
          <Col>
            <Row>
              <Col xs={12}>
                <h6 className="fs-6 fw-bold">Ответственные:</h6>
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
            <h6 className="fs-6 fw-bold">Адрес ТАСИ:</h6>
            <p>
              100084, г. Ташкент, ул. Кичик халка йули, 7, Ташкентский
              архитектурно-строительный институт (ТАСИ) Сайт: taqi.uz
            </p>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.1400179347584!2d37.526480916033854!3d55.70393790322699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c6435a66743%3A0xfae7174706dad052!2sMoscow%20State%20University!5e0!3m2!1sen!2sid!4v1678796390366!5m2!1sen!2sid"
              width="100%"
              height="250px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <div className="py-3 text-white bg-green-300 text-center">
        <Container>
          &copy; Ташкентский архитектурно-строительный институт | 2020г.
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
