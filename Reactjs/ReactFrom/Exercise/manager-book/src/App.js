import React, {  useRef, useState } from 'react';
import {Formik} from "formik";
import "./App.css";
function App ()  {
  const [book, setBook] = useState({
    title : "",
    numbers : ""
  });
  
  const [books, setBooks] = useState([]);
  const [position, setPosition] = useState(-1);
  const titleRef = useRef();
 

  const handleChangeValue = (e) => {
    setBook(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleValidate = () => {
    const errors ={};
    if(!book.title) {
      errors.title = "Required";
    }
    if (!book.numbers) {
      errors.numbers = "Required";
    }
    return errors;
  }

  const handleEdit = (index,book) => {
      setBook(book);
      setPosition(index);
  }

  const handleSubmit = () => {
    const newArr = [...books];
    if(position > -1){
      newArr.splice(position,1,book);
    }else {
      newArr.push(book);
    }
    setBooks(newArr);
    setPosition(-1);
    setBook({
      title :"",
      numbers :""
    })
    titleRef.current.focus();
  }

  const handleDelete = (index) => {
    const newArr = [...books];
    newArr.splice(index,1);
    setBooks(newArr)
  }
  
  return (
    <div className='container'>
      <h1>Library</h1>
      <Formik
        initialValues={book}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
      {({errors, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div className={`custom-input ${errors.title ? "custom-input-errors" : ""}`}>
            <label htmlFor='title'>Title</label>
            <input 
              value={book.title}
              ref={titleRef}
              name="title"
              placeholder='Chiec luoc nga,..'
              onChange={handleChangeValue}
            />
            <p className='error'>{errors.title}</p>
          </div>
          <div className={`custom-input ${errors.numbers ? "custom-input-errors" : ""}`}>
            <label htmlFor='numbers'>Numbers :</label>
            <input 
              value={book.numbers}
              name="numbers"
              type={"number"}
              placeholder='2'
              onChange={handleChangeValue}
            />
            <p className='error'>{errors.numbers}</p>
          </div>
          <button type='submit'>Add</button>
        </form>
      )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Numbers</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.numbers}</td>
                <td>
                    <button onClick={() => handleEdit(index, book)}>Edit</button>
                    <button onClick={() =>handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
}

export default App;
