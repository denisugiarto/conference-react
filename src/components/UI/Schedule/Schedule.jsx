import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import Section from '../Section/Section';
import './Schedule.scss';
import TableSchedule from './TableSchedule';

const Schedule = () => {
  return (
    <Section className='bg-light'>
      <Container>
        <h3 className='section-title text-center'>Программа мероприятий</h3>
        <ButtonGroup>
          <Button>1 День</Button>
          <Button>2 День</Button>
        </ButtonGroup>
        <TableSchedule />
      </Container>
    </Section>
  );
};

export default Schedule;
