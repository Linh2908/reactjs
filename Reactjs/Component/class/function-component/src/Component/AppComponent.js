import React from 'react';

const Appcomponent = (props) => {
    return (
        <div>
            <h1>Total : {props.firstNum + props.secondNum}</h1>
        </div>
    );
}

export default Appcomponent;
