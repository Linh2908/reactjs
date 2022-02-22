import './App.css';
import Football from './Component/Football';

function App() {
  let handleClick = (e) => {
      e.preventDefault();
      console.log("you had clicked a Link");
  }
  return (
    <div className="App">
        <a href='tuan+anh' onClick={(e) => (handleClick(e))}>Click me</a>
        <Football></Football>
    </div>
  );
}

export default App;
