import React, { useReducer, useRef } from 'react';

const initState = {
  job : "",
  jobs : []
}

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => (
  {
    type : SET_JOB,
    payload
  }
)

const addJob = (payload) => {
  return {
    type : ADD_JOB,
    payload,
  }
}

const delJob = (payload) => {
  return {
    type : DELETE_JOB,
    payload,
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_JOB : 
      return state = {
        ...state,
        job : action.payload
      }
    case ADD_JOB : 
      return {
        ...state,
        jobs : [...state.jobs, action.payload]
      }
    case DELETE_JOB : 
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs : newJobs
      }
    default : 
      throw new Error("action error")
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initState);
  const targetRef = useRef();

  const {job,jobs} = state;

  const handleSubmit = () => {
    dispatch(setJob(""));
    dispatch(addJob(job));
    targetRef.current.focus();
  }

  return (
    <div>
      <h1>Todo</h1>
      <input 
        value={job}
        ref={targetRef}
        placeholder="enter todo..."
        onChange={(e) =>dispatch(setJob(e.target.value)) }
      />
      <button 
        onClick={handleSubmit}
      >
        Add
      </button>
      <ul>

      {
        jobs.map((job,index) => (
          <li key={index}>
            {job} 
            <span onClick={() => dispatch(delJob(index))}> &times;</span>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
