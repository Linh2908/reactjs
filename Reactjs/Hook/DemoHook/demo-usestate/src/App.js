import React, {useState} from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div className='App'>
      Gia tri : {count}
      <div><button onClick={() => (handleClick())}>Click</button></div>
    </div>
  );
}

export default App;
