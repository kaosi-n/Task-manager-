import React from "react";
import MainCon from "./MainCon";
import { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { ArcElement, Tooltip, Legend } from "chart.js";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard({ setToggle, toggle }) {
  return (
    <div className="main-con">
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
            required
            placeholder="Enter task name"
          />
          <label htmlFor="taskDes">Description</label>
          <textarea
            id="taskDes"
            type="text"
            placeholder="Enter task description.."
          />
          <label htmlFor="priority">priority</label>
          <select name="" id="priority">
            <option value="Normal">Normal</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" />
          <input type="time" />
          <label htmlFor="reminderTime">Reminder Time</label>
          <input type="date" />
          <input type="time" />
          <div className="taskBtn">
            <button className="cancelBtn" onClick={handleToggleOff}>
              Cancel
            </button>
            <button className="addBtn">Add Task</button>
          </div>
        </div>
      </div>
      <div className="box-1 grid">
        <div className="box1-1 grid2 grid">
          <span>Total Tasks</span>
          <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>0</span>
          <i
            style={{
              backgroundColor: "rgba(177, 181, 246, 0.56)",
              color: "rgb(66, 66, 107)",
            }}
            className="bi bi-bullseye"
          ></i>
        </div>
        <div className="box1-2 grid2 grid">
          <span>Completed</span>
          <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>0</span>
          <i
            style={{
              backgroundColor: "rgba(169, 246, 169, 0.56)",
              color: "rgb(86, 115, 82)",
            }}
            className="bi bi-check2-circle"
          ></i>
        </div>
        <div className="box1-3 grid2 grid">
          <span>Pending</span>
          <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>0</span>
          <i
            style={{
              backgroundColor: "rgba(249, 249, 183, 0.56)",
              color: "rgb(121, 118, 78)",
            }}
            className="bi bi-clock"
          ></i>
        </div>
        <div className="box1-4 grid2 grid">
          <span>Overdue</span>
          <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>0</span>
          <i
            style={{
              backgroundColor: "rgba(252, 170, 170, 0.56)",
              color: "rgb(112, 73, 73)",
            }}
            className="bi bi-exclamation-triangle"
          ></i>
        </div>
      </div>
      <div className="box-2 grid">
        <div className="box2-1 grid3">
          <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
            Quick Stats
          </div>
          <div className="quickOption">
            <div>
              <span>Today's Tasks</span>
              <span style={{ fontWeight: "bold" }}>0</span>
            </div>
            <div>
              <span>This Week</span>
              <span style={{ fontWeight: "bold" }}>0</span>
            </div>
            <div>
              <span>High Priority</span>
              <span style={{ fontWeight: "bold", color: "red" }}>0</span>
            </div>
          </div>
        </div>
        <div
          style={{ fontSize: "1.2em", fontWeight: "bold" }}
          className="box2-1 grid3"
        >
          upcoming
        </div>
      </div>
      <div className="box-3 grid">
        <div className="grid4">
          <Doughnut
            data={{
              labels: ["c", "p", "o"],
              datasets: [
                {
                  label: "Count",
                  data: ["20", "9", "7"],
                  backgroundColor: [
                    "rgb(148, 187, 186)",
                    "rgb(246, 194, 120)",
                    "rgb(194, 120, 146)",
                  ],
                  borderWidth: 0,
                  borderRadius: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "#f3eae1", // Change legend text color
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="box-4 grid">
        <div>Tasks Overview</div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>
                {task}{" "}
                <span className="listIcon">
                  <i class="bi bi-trash3"></i>
                  <i class="bi bi-chevron-up"></i>
                  <i class="bi bi-chevron-down"></i>
                </span>{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
