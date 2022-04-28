import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  let [data, setData] = useState({});
  let [requestParams, setRequestParams] = useState({});
  
  // useEffect(() => {
  //   callApi(requestParams);
  // }, [requestParams]);


  let callApi = async (requestParams) => {
    const response = await axios.get(requestParams.url);
    setRequestParams(requestParams);
    setData({
      headers: response.headers,
      count: response.data.count,
      results: response.data.results,
    });
    console.log(response.headers);
  };


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
