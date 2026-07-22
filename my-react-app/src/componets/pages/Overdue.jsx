import React from "react";

export default function overdue({ tasks, setTasks }) {
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <div>
      <div>
        <ul className="allTask">
          {tasks.map((task, index) => (
            <div className="group">
              <li key={index} className="liAllTask">
                <div className="taskTitle">
                  <span>{task.title.toUpperCase()}</span>
                  <i onClick={() => deleteTask(index)} class="bi bi-trash3"></i>
                </div>
                <div className="otherAllTask">
                  <span> {task.description} </span>
                  <div className="pD">
                    <span
                      className={task.priority === "High" ? "tcolor" : null}
                    >
                      {" "}
                      {task.priority}{" "}
                    </span>
                    <span> {task.dueDate} </span>
                    <span>{task.time}</span>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
