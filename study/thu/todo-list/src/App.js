import React, { useState } from 'react';

const App = () => {

  

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState((() => {
    const storageJobs = JSON.parse(localStorage.getItem("Jobs"));
    return storageJobs;
  })() ?? []);


  const handleAdd = () => {

    if (job !== "") {
      setJobs(prev => {
        let newJob = [...prev,job];
        let jsonJob = JSON.stringify(newJob);
        localStorage.setItem("Jobs",jsonJob);
        return newJob;
      });
    }

    setJob("");
  }

  const handleDelete = (index) => {
    const newJobs = jobs;
    newJobs.splice(index,1);
    let jsonJob = JSON.stringify(newJobs);
        localStorage.setItem("Jobs",jsonJob);
    setJobs([...newJobs]);
  }

  return (
    <div>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <div className='display'>
        <table>
          <tbody>
            {
              jobs.map((job, index) => (
                <tr key={index}>
                  <td>{job}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
