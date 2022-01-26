import React from 'react';

 
const App = () => {
    let formartName = (user) => {
        return "bat dau thoi " + user;
    }

    let getGreeting = (user) =>{
        if(user) {
            return <h1 className='title'> hello , {formartName(user)}</h1>
        }
    }
    
    // const myStyle = {
    //     margin : "20px",
    //     border : "2px solid",
    //     color : "pink"
    // }
    return (
       <div>
           {getGreeting("Tuan Anh")}

           {/* <h4 style={myStyle}> Bat Dau thoi</h4> */}
       </div>
    );
}

export default App;
