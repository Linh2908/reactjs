import React, { useEffect, useState } from 'react';


const lessons = [
  {
    id: 1,
    name: "useState in Reactjs"
  },
  {
    id: 2,
    name: "useEffect in Reactjs"
  },
  {
    id: 3,
    name: "useHook in Reactjs"
  }
]
const App = () => {

  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleCommet = ({detail}) => (
      console.log(detail)
    )

    window.addEventListener(`lesson-${lessonId}`,handleCommet);
    return () => {

    window.removeEventListener(`lesson-${lessonId}`,handleCommet);
      
    };
  }, [lessonId]);
  return (
    <div>
      <ul>

        {
          lessons.map(lesson => (
            <li 
              key={lesson.id} 
              style={{
                color : lessonId === lesson.id ?
                      "red" : 
                      "#000"
              }}

              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
