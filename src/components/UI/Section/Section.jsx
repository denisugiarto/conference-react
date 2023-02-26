import React from 'react';
import './Section.scss';
import { Container } from 'react-bootstrap';

const Section = ({ className, title, titleClassName, children }) => {
  return (
    <section className={`section ${className}`}>
      <Container>
        <h3 className={`section-title text-success text-center ${titleClassName}`}>
          {title}
        </h3>
        {children}
      </Container>
    </section>
  );
};

export default Section;
