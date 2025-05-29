import React, { useState } from 'react';

function Inputs() {
  const [text, setText] = useState('');

  return (
    <div className="inputs">
      <h2>📝 Input Tracker</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputs;
