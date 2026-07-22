import React from "react";
import { Link } from "react-router-dom";
import MainCon from "./MainCon";
import { useState } from "react";

export default function Header({ tasks, setTasks }) {
  // let userName = window.prompt("Enter your name");

  // if (userName === null || userName.trim() === "") {
  //   userName = "FRIEND";
  // }
  // {userName.toUpperCase()}

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [time, setTime] = useState("");

  const [toggle, setToggle] = useState(false);
  function handleToggleOff() {
    setToggle(false);
  }
  function handleTaskToggle() {
    setToggle(true);
  }

  function handleAddTask() {
    if (title.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
    const newTask = {
      title: title,
      description: description,
      priority: priority,
      dueDate: dueDate,
      time: time,
      checked: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    setTime("");
    setToggle(false);
  }

  return (
    <div className="header">
      <div
        className={
          toggle === true ? "addtaskblock toggle-on" : "addtaskblock toggle-off"
        }
      >
        <div className="addtask">
          <div className="taskTitle">
            Add New Task <i onClick={handleToggleOff} class="bi bi-x"></i>
          </div>
          <label htmlFor="taskName">
            Task Title <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="taskName"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter task name"
          />
          <label htmlFor="taskDes">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="taskDes"
            type="text"
            placeholder="Enter task description.."
          />
          <label htmlFor="priority">priority</label>
          <select
            name=""
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Priority</option>
            <option value="Normal">Normal</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label htmlFor="reminderTime">Reminder Time</label>
          <input type="date" />
          <input type="time" />
          <div className="taskBtn">
            <button className="cancelBtn" onClick={handleToggleOff}>
              Cancel
            </button>
            <button className="addBtn" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
      <div className="hello">HELLO, FRIEND!</div>
      <button className="addbtn box">
        <i className="bi bi-plus-circle-fill" onClick={handleTaskToggle}></i>
      </button>
    </div>
  );
}
