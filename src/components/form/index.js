import React from 'react';
import { useState } from 'react';

import './form.scss';

function Form(props) {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');

  const handleMethod = e => {
    e.preventDefault();
    setMethod(e.target.id.toUpperCase());
  };

  const handleUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(e.target.value);
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="api-form">
        <label >
          <span>URL: </span>
          <input onChange={handleUrl} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleMethod} id="get">GET</span>
          <span onClick={handleMethod} id="post">POST</span>
          <span onClick={handleMethod} id="put">PUT</span>
          <span onClick={handleMethod} id="delete">DELETE</span>
        </label>
        <textarea name="JSONobj" placeholder="Enter your PUT/POST request body here" />
      </form>
    </>
  );
  
}

export default Form;
