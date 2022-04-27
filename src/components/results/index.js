import React from 'react';


function Results(props) {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <p>loading</p>}</pre>
    </section>
  );
}

export default Results;
