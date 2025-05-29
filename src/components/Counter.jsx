import React from 'react';

function Counter({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <div className="counter-buttons">
        <button onClick={decrement}>−</button>
        <button onClick={increment}>＋</button>
      </div>
    </div>
  );
}

export default Counter;
