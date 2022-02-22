import React, { useEffect, useState } from 'react';

const App = () => {
  const [valueInput, setValueInput] = useState("");
  const [result, setResullt] = useState("");

  useEffect(() => {
    setResullt("Hello " + valueInput);
  }, [valueInput]);

  return (
    <div>
      <input onChange={(e) => (setValueInput(e.target.value))} placeholder='Nhap mot thu gi do...' type={"text"}></input>

      <h1>{result}</h1>
    </div>
  );
}

export default App;
