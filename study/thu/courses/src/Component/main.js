import React from 'react';

const Main = ({course , onClick}) => {
    return (
        <div>
            <h1>{course.title}</h1>
            <img 
                src={course.image_url} 
                onClick={() =>onClick(course)}/>
            <p>{course.description}</p>
            <h1>{course.students_count}</h1>
        </div>
    );
}

export default Main;
