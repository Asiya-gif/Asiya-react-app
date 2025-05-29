import React, { useState } from 'react';

function Inputer() {
  const [value, setValue] = useState('');

  return (
    <input 
      type="text" 
      value={value} 
      onChange={(event) => setValue(event.target.value)} 
    />
  );
}

export default Inputer;