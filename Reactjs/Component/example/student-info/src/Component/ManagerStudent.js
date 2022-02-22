import React from 'react';
import './ManagerStudent.css';
const Managerstudent = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.address}</td>
        </tr>
    );
}

export default Managerstudent;
