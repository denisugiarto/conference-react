import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <>
      <Form>
        <FormControl
          className='mb-2 shadow'
          placeholder='Имя*'
          required
        ></FormControl>
        <FormControl
          className='mb-2 shadow'
          placeholder='Фамилия*'
          required
        ></FormControl>
        <FormControl
          className='mb-2 shadow'
          placeholder='Элекьронная почта*'
          required
        ></FormControl>
        <FormControl className='mb-2 shadow' placeholder='Phone'></FormControl>
        <FormControl
          className='mb-5 shadow'
          placeholder='Сообщение*'
          required
        ></FormControl>
        <div className='text-center'>
          <Button type='submit' className='px-6'>
            Отправить
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
