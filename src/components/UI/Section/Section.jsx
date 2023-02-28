import React from 'react';
import './Section.scss';
import { Container } from 'react-bootstrap';

const Section = ({ className, title, titleClassName, children }) => {
  return (
    <section className={`section p-3 p-lg-7 ${className}`}>
      <Container>
        <h3 className={`section-title text-success text-center fw-bold fs-2 fs-md-1 ${titleClassName}`}>
          {title}
        </h3>
        {children}
      </Container>
    </section>
  );
};

export default Section;
