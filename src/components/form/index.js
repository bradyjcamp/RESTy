import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './form.scss';

function Form(props) {


  // useEffect(() => {
  //   console.log('An event had occured!!');
  // }); // this will run when any event happens

  //didmount
  // useEffect(() => {
  //   console.log('I have mounted');
  // }, []); //give an empty array to run once on mount

  const [method, setMethod] = useState('');
  const [urlInput, setUrlInput] = useState('');

  // update
  // useEffect(() => {
  //   console.log('url has been updated')
  // }, [urlInput]);

  // unmount
  // useEffect(() => {
  //   return () => console.log('component unmounts')
  // });

  const handleMethod = e => {
    e.preventDefault(e);
    setMethod(e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  return (
    // onClick={() => setUrlInput('new Url')}
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
  
}

export default Form;
