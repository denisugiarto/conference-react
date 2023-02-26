import React, { useEffect, useState } from 'react';
import Section from '../Section/Section';
import './Schedule.scss';
import SelectButton from './SelectButton';
import TableSchedule from './TableSchedule';
import axios from 'axios';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    axios
      .get('/data/schedule.json')
      .then((res) => setSchedules(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Section className='bg-light' title='Программа мероприятий'>
      <SelectButton />
      <TableSchedule dataTable={schedules} />
    </Section>
  );
};

export default Schedule;
