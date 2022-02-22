import React, { useState } from 'react';


const courses = [
    {
        id: 1,
        name: "JavaScript"
    },
    {
        id: 2,
        name: "React"
    },
    {
        id: 3,
        name: "HTML, CSS"
    }
]

const Twowaybuild = () => {
    // const [Info, setInfo] = useState({
    //     Name :"" ,
    //     Email : ""
    // });

    // const handleInfo = (key, value) => {

    //     setInfo(prev => ({...prev,[key] : value }))
    // }

    // const displayInfo = () => {
    //     console.log(Info.Name);
    // }

    const [checked, setChecked] = useState([]);


    const handleChecked = (id) => {
       setChecked(prev => {
           const isCheck = checked.includes(id);
           if(isCheck) {
                return checked.filter(item => item!== id);
           }else {
               return [...prev,id ];
           }
       })
    }

    const handleDisplay = () => {
        console.log(checked);
    }

    return (
        <div>
            {/* <input 
                value={Info.Name}
                onChange={(e) =>(handleInfo("Name" ,e.target.value))}
            />
            <input 
                type={'email'}
                value={Info.Email}
                onChange={(e) =>(handleInfo("Email" ,e.target.value))}
            /> */}

            {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type={'checkbox'}
                            checked={checked.includes(course.id)}
                            onChange={() => handleChecked(course.id)}
                        />
                        <label>{course.name}</label>
                    </div>
                ))
            }
            <button onClick={handleDisplay}>Change Name</button>
        </div>
    );
}

export default Twowaybuild;
