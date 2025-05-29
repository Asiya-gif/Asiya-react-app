import React from 'react';

function Greeting({ name, surname }) {
  return (
    <div className="section" style={{ textAlign: 'center' }}>
      <h1>Hello, {name} {surname}!</h1>
      <h2>👋 I'm proud of my work!</h2>
    </div>
  );
}

export default Greeting;
