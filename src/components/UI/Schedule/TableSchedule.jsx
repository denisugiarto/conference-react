import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Clock, DashLg } from 'react-bootstrap-icons';
import './TableSchedule.scss';
import axios from 'axios';

const TableSchedule = ({dataTable}) => {
  return (
    <Table striped variant='white' className='mt-4'>
      <tbody className='text-center'>
        {dataTable.map((schedule) => (
          <tr key={schedule.id}>
            <td className='text-end'>
              <Clock />
            </td>
            <td className='text-start'>
              {schedule.startTime} - {schedule.endTime}
            </td>
            <td>
              <DashLg />
            </td>
            <td className='fw-bold text-start'>
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
