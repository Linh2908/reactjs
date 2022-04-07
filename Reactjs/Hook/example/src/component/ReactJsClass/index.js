import React, { useEffect, useState } from 'react';

function ReactJsClass () {

    const [monintor, setmintor] = useState({
        id : 1,
        name : "a",
        grade : "C",
    });

    const [students, setStudents] = useState([
        {
            id : 1,
            name : "a",
            grade : "A",
        },
        {
            id : 2,
            name : "b",
            grade : "B",
        },
        {
            id : 3,
            name : "c",
            grade : "C",
        },
        {
            id : 4,
            name : "d",
            grade : "D",
        },
        {
            id : 5,
            name : "e",
            grade : "E",
        },
        {
            id : 6,
            name : "f",
            grade : "F",
        },
        {
            id : 7,
            name : "g",
            grade : "A",
        },
        {
            id : 8,
            name : "u",
            grade : "A",
        },
        {
            id : 9,
            name : "k",
            grade : "C",
        },
        {
            id : 10,
            name : "w",
            grade : "B",
        },
        {
            id : 11,
            name : "sds",
            grade : "A",
        },
        {
            id : 12,
            name : "sdf",
            grade : "E",
        },
        {
            id : 13,
            name : "dse",
            grade : "E",
        },
        {
            id : 14,
            name : "sdfs",
            grade : "A",
        },
        {
            id : 15,
            name : "sdfs",
            grade : "F",
        },
        {
            id : 16,
            name : "sds",
            grade : "F",
        },
        {
            id : 17,
            name : "ds",
            grade : "B",
        },
        {
            id : 18,
            name : "sef",
            grade : "A",
        },
        {
            id : 19,
            name : "as",
            grade : "C",
        },
        {
            id : 20,
            name : "t",
            grade : "A",
        },
    ]);


    const [countStudent, setCountStudent] = useState( students.length);

    useEffect(() => {
       const newMonintor = students.find(student => student.grade === "A");
       setmintor(newMonintor)
    }, []);

    useEffect(() => {
        alert(`Class monitor was changed to ${monintor.name}”`)
       
    }, [monintor]);

    console.log(monintor);
    return (
        
        <div>
            
        </div>
    );
}

export default ReactJsClass;
