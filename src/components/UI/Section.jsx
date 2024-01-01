import React from "react";
import "./Section.scss";
import { Container } from "react-bootstrap";

const Section = ({
  sectionClassName = "",
  title = "title",
  titleClassName = "",
  children,
}) => {
  return (
    <section className={`section py-6 p-lg-7 ${sectionClassName}`}>
      <Container>
        <h3
          className={`section-title text-success text-center fw-bold fs-2 fs-md-1 mb-3 mb-lg-5 ${titleClassName}`}
        >
          {title}
        </h3>
        {children}
      </Container>
    </section>
  );
};

export default Section;
