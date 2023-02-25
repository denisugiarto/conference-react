import React from 'react';
import './Section.scss';

const Section = ({ className, children }) => {
  return <section className={`section ${className}`}>{children}</section>;
};

export default Section;
