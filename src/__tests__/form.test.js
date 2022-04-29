import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/form/index.js';

describe('testing our form component', () => {

  test('Should update values on submit', () => {


      const handleSubmit = jest.fn();


    render(<Form  onSubmit={handleSubmit}/>);

    let inputEl = screen.getByTestId();
    fireEvent.change(inputEl, {target: { value: "test value"}});

    let submitBtn = screen.getByTestId();
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalled();
  });
});

