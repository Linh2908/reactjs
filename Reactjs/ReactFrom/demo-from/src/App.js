import React, { useState } from 'react';

const App = () => {

  const [car, setCar] = useState("BMW");
  return (
    <div>
      <select value={car} onChange={e => setCar(e.target.value)}>
        <option value="MEC">MEC</option>
        <option value="BMW">BMW</option>
        <option value="HONDA">HONDA</option>
      </select>
    </div>
  );
}

export default App;
