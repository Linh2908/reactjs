import './App.css';
import data from "./Component/data.json"
import Managerstudent from './Component/ManagerStudent';
function App() {
  // console.log(data.data);
  return (

    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {
          data.data.map((student) => (
            <Managerstudent key={student.Id} id={student.Id} name={student.Name} age={student.Age} address={student.Address}></Managerstudent>
          ))
        }
        </tbody>
        
      </table>

    </div>
  );
}

export default App;
