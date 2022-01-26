import React from 'react';

const App = () => {

    const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

    return (

        <div>
            <h1>List Fruits in here</h1>
           <ul>
               {
                   fruits.map((item) => {
                       return <li> {item} </li>;
                   })
               }
           </ul>
        </div>
    );
}

export default App;
