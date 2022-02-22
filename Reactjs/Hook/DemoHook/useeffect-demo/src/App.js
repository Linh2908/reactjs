import React,{ useEffect, useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState("0");
  const [ValueSelected, setValueSelected] = useState("");

  const choice = (e) => {
    setSelected(e.target.value);
  }
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch(selected) {
      case "0" : setValueSelected("Java"); break;
      case "1" : setValueSelected("Angalur"); break;
      case "2" : setValueSelected("JavaScript"); break;
      case "3" : setValueSelected("Ruby"); break;
    }
  }, [selected]);
  return (
    <div>
      Khoa hoc : 
      <select onChange={(e) => (choice(e))}>
        <option value={0}>Java</option>
        <option value={1}>Angalur</option>
        <option value={2}>JavaScript</option>
        <option value={3}>Ruby</option>
      </select>

      <div>{ValueSelected}</div>
    </div>
  );
}

export default App;
