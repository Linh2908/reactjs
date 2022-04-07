import React, { useEffect, useState } from 'react';
import ReactJsClass from './component/ReactJsClass';

const App = () => {
  const [valueInput, setValueInput] = useState("");
  const [result, setResullt] = useState("");

  useEffect(() => {
    setResullt("Hello " + valueInput);
  }, [valueInput]);

  return (
    <div>
      {/* <input onChange={(e) => (setValueInput(e.target.value))} placeholder='Nhap mot thu gi do...' type={"text"}></input>

      <h1>{result}</h1> */}
      <ReactJsClass/>
    </div>
  );
}

export default App;
