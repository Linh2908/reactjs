import './App.css';
import {useState, useEffect} from 'react';
function App() {

  const [Count, setCount] = useState(0);

  // Cong dung giong nhu componentDidMount va componentDidUpdate

  useEffect(() => {
    return document.title = `You clicked ${Count} times`;
  });

  return (
    <div className="App">
      <p>You clicked {Count} times</p>
      <button onClick={() => setCount(Count + 1)}> Click me</button>
    </div>
  );
}

export default App;
