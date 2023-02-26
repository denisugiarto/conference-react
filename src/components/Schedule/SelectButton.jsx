import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './SelectButton.scss';

const SelectButton = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    {
      value: '1',
    },
    {
      value: '2',
    },
  ];
  return (
    <ToggleButtonGroup type='radio' name='options' defaultValue='1' className='mt-7'>
      {radios.map((radio, index) => (
        <ToggleButton
          key={index}
          id={`radio-${index}`}
          type='radio'
          variant='outline-primary'
          name='radio'
          value={radio.value}
          className='fw-bold px-4'
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          {radio.value} День
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SelectButton;
