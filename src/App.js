import "./App.css";
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className='App'>
      <section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-xl-10'>
              <div className='card' style={{ borderRadius: "15px" }}>
                <div className='card-body p-5'>
                  <h6 className='mb-3'>Todo List</h6>

                  <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                      <input
                        placeholder='Add a task'
                        value={task}
                        onChange={handleChange}
                        type='text'
                        id='form3'
                        className='form-control form-control-lg'
                      />
                    </div>
                    <button type='submit' className='btn btn-primary btn-lg ms-2'>
                      Add
                    </button>
                  </form>

                  <ul className='list-group mb-0'>
                    {tasks &&
                      tasks.map((el, index) => {
                        return (
                          <li className='list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2'>
                            <div className='d-flex align-items-center'>{el}</div>
                            <button onClick={() => deleteTask(index)}>X</button>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
