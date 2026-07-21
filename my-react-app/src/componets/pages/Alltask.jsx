import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Alltask({ tasks, setTasks }) {
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }
  function handleCheck(index, checked) {
    setTasks((prevTask) =>
      prevTask.map((task, i) => (i === index ? { ...task, checked } : task)),
    );
    console.log(checked);
  }
  // const tasks = [
  //   {
  //     title: "Add greenery",
  //     description:
  //       "Use lots of eucalyptus, ruscus, fern, or other leafy greens around",
  //     priority: "Normal",
  //     dueDate: "7-18-2026",
  //   },
  //   {
  //     title: "Use a spiral hand-tied style",
  //     description:
  //       "This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.",
  //     priority: "Medium",
  //     dueDate: "12-3-2021",
  //   },
  //   {
  //     title: "Wrap it generously",
  //     description: "",
  //     priority: "High",
  //     dueDate: "7-11-2008",
  //   },
  // ];
  return (
    <div>
      <div>
        <ul className="allTask">
          {tasks.map((task, index) => (
            <div className={task.checked === true ? "group taskDone" : "group"}>
              <input
                className="checkBox"
                type="checkbox"
                checked={task.checked}
                onChange={(e) => handleCheck(index, e.target.checked)}
              />
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
