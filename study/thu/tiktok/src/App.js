// import { useState } from 'react';
import Gift from './Component/Gift';
import Twowaybuild from './Component/TwoWayBuild';

function App() {

  // const [info, setInfo] = useState({
  //   name : "Nguyen Tuan Anh",
  //   age : "18",
  //   address : "Ha Noi, VN"
  // });

  // function handleInfo() {
  //   setInfo( {
  //     ...info,
  //     name : "Co gang le"
  //   })
  // }
  return (
    <div className="App">
      {/* <h1 style={{padding: "20px",}}>{JSON.stringify(info)}</h1>
      <button onClick={handleInfo}>Increase</button> */}
      <Gift></Gift>
      <Twowaybuild></Twowaybuild>
    </div>
  );
}

export default App;
