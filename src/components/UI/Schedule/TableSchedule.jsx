import axios from 'axios';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Clock, DashLg } from 'react-bootstrap-icons';
import './TableSchedule.scss';

const TableSchedule = ({ schedulesList }) => {
  useEffect(() => {
    const schedules = axios;
  }, []);

  return (
    <Table striped hover borderless variant='white' className='mt-5'>
      <tbody>
        {schedulesList.map((schedule) => (
          <tr>
            <td className='text-end'>
              <Clock />
            </td>
            <td >
              {schedule.startTime} - {schedule.endTime}
            </td>
            <td className='text-center'>
              <DashLg />
            </td>
            <td className='fw-bold'>
              {schedule.title} <br />
              {schedule.description}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableSchedule;
